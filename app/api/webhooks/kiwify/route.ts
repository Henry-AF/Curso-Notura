import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { sendActivationEmail } from "@/lib/email/resend";
import type { KiwifyWebhookPayload } from "@/lib/kiwify/types";

const HANDLED_EVENTS = new Set([
  "order_approved",
  "subscription_renewed",
  "subscription_canceled",
  "subscription_late",
]);

export async function POST(request: NextRequest) {
  let rawPayload: unknown;
  let rawBody: string;

  try {
    rawBody = await request.text();
    rawPayload = JSON.parse(rawBody);
  } catch {
    console.error("[kiwify-webhook] payload inválido — não é JSON");
    return NextResponse.json({ error: "invalid payload" }, { status: 400 });
  }

  // --- Validação HMAC-SHA1 via Web Crypto API (timing-safe por spec) ---
  const expectedToken = process.env.KIWIFY_WEBHOOK_TOKEN;
  if (!expectedToken) {
    console.error("[kiwify-webhook] KIWIFY_WEBHOOK_TOKEN não configurado");
    return NextResponse.json({ error: "server misconfigured" }, { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const receivedSignature = searchParams.get("signature") ?? "";

  const enc = new TextEncoder();
  const hmacKey = await crypto.subtle.importKey(
    "raw",
    enc.encode(expectedToken),
    { name: "HMAC", hash: "SHA-1" },
    false,
    ["verify"]
  );

  let signatureValid = false;
  try {
    signatureValid = await crypto.subtle.verify(
      "HMAC",
      hmacKey,
      hexToBytes(receivedSignature),
      enc.encode(rawBody)
    );
  } catch {
    signatureValid = false;
  }

  if (!signatureValid) {
    console.warn("[kiwify-webhook] assinatura inválida");
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const payload = rawPayload as KiwifyWebhookPayload;
  const event = payload?.webhook_event_type ?? "desconhecido";
  const orderId = payload.data?.id;

  if (!HANDLED_EVENTS.has(event)) {
    console.log("[kiwify-webhook] evento ignorado:", event);
    return NextResponse.json({ received: true });
  }

  console.log("[kiwify-webhook] processando:", event, "orderId:", orderId);

  try {
    switch (event) {
      case "order_approved":
        await handleOrderApproved(payload);
        break;
      case "subscription_renewed":
        await handleSubscriptionRenewed(payload);
        break;
      case "subscription_canceled":
        await handleSubscriptionCanceled(payload);
        break;
      case "subscription_late":
        await handleSubscriptionLate(payload);
        break;
    }
    console.log("[kiwify-webhook] concluído:", event, "orderId:", orderId);
  } catch (err) {
    console.error("[kiwify-webhook] erro ao processar:", event, "orderId:", orderId, err);
  }

  return NextResponse.json({ received: true });
}

// ---------------------------------------------------------------------------

async function handleOrderApproved(payload: KiwifyWebhookPayload) {
  const { data } = payload;
  const email = data.Customer?.email;
  const name = data.Customer?.full_name ?? "";
  const orderId = data.id;
  const subscriptionId = data.Subscription?.id;

  if (!email) {
    console.warn("[kiwify-webhook] order_approved sem e-mail de cliente");
    return;
  }

  // --- Idempotência: já processamos este order_id? ---
  const { data: existing } = await supabaseAdmin
    .from("profiles")
    .select("id")
    .eq("kiwify_order_id", orderId)
    .maybeSingle();

  if (existing) {
    console.log("[kiwify-webhook] order_id já processado:", orderId);
    return;
  }

  // --- Garante que o usuário existe no Supabase Auth ---
  const userId = await upsertAuthUser(email);
  if (!userId) return;

  const renewsAt = addDays(30);

  // --- Cria ou atualiza o perfil ---
  const { error } = await supabaseAdmin.from("profiles").upsert(
    {
      id: userId,
      email,
      plan: "pro",
      plan_status: "active",
      plan_source: "kiwify",
      plan_renews_at: renewsAt.toISOString(),
      kiwify_order_id: orderId,
      kiwify_subscription_id: subscriptionId ?? null,
    },
    { onConflict: "id" }
  );

  if (error) {
    console.error("[kiwify-webhook] erro ao upsert profile:", error);
    return;
  }

  // --- Gera magic link e envia e-mail de ativação ---
  const magicLink = await generateMagicLink(email);
  if (magicLink) {
    await sendActivationEmail({ to: email, name, magicLink });
  }

  console.log("[kiwify-webhook] order_approved processada — userId:", userId);
}

async function handleSubscriptionRenewed(payload: KiwifyWebhookPayload) {
  const email = payload.data?.Customer?.email;
  if (!email) return;

  const renewsAt = addDays(30);

  const { error } = await supabaseAdmin
    .from("profiles")
    .update({
      plan: "pro",
      plan_status: "active",
      plan_renews_at: renewsAt.toISOString(),
    })
    .eq("email", email);

  if (error) {
    console.error("[kiwify-webhook] erro ao renovar plano:", error);
  } else {
    console.log("[kiwify-webhook] subscription_renewed — email:", maskEmail(email));
  }
}

async function handleSubscriptionCanceled(payload: KiwifyWebhookPayload) {
  const email = payload.data?.Customer?.email;
  if (!email) return;

  const { error } = await supabaseAdmin
    .from("profiles")
    .update({ plan: "free", plan_status: "canceled" })
    .eq("email", email);

  if (error) {
    console.error("[kiwify-webhook] erro ao cancelar plano:", error);
  } else {
    console.log("[kiwify-webhook] subscription_canceled — email:", maskEmail(email));
  }
}

async function handleSubscriptionLate(payload: KiwifyWebhookPayload) {
  const email = payload.data?.Customer?.email;
  if (!email) return;

  const { error } = await supabaseAdmin
    .from("profiles")
    .update({ plan: "free", plan_status: "late" })
    .eq("email", email);

  if (error) {
    console.error("[kiwify-webhook] erro ao marcar inadimplente:", error);
  } else {
    console.log("[kiwify-webhook] subscription_late — email:", maskEmail(email));
  }
}

// ---------------------------------------------------------------------------
// Helpers

async function upsertAuthUser(email: string): Promise<string | null> {
  // 1. Checa a tabela profiles (query leve, evita chamadas ao auth)
  const { data: profile } = await supabaseAdmin
    .from("profiles")
    .select("id")
    .eq("email", email)
    .maybeSingle();

  if (profile?.id) return profile.id;

  // 2. Tenta criar (falha silenciosamente se e-mail já existe)
  const { data: created, error: createErr } = await supabaseAdmin.auth.admin.createUser({
    email,
    email_confirm: true,
  });

  if (!createErr && created.user?.id) return created.user.id;

  // 3. Fallback: usuário existe no auth mas ainda não tem perfil — busca paginada
  const { data: list } = await supabaseAdmin.auth.admin.listUsers({ page: 1, perPage: 1000 });
  const found = list?.users?.find((u) => u.email === email);
  if (found) return found.id;

  console.error("[kiwify-webhook] não foi possível criar/encontrar usuário:", createErr);
  return null;
}

async function generateMagicLink(email: string): Promise<string | null> {
  const { data, error } =
    await supabaseAdmin.auth.admin.generateLink({
      type: "magiclink",
      email,
    });

  if (error) {
    console.error("[kiwify-webhook] erro ao gerar magic link:", error);
    return null;
  }

  return data.properties?.action_link ?? null;
}

function addDays(days: number): Date {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d;
}

function hexToBytes(hex: string): Uint8Array<ArrayBuffer> {
  const buf = new ArrayBuffer(hex.length / 2);
  const bytes = new Uint8Array(buf);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  return bytes;
}

function maskEmail(email?: string): string {
  if (!email) return "(sem e-mail)";
  const [local, domain] = email.split("@");
  return `${local.slice(0, 2)}***@${domain}`;
}
