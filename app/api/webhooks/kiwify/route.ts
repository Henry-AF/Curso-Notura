import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { sendPasswordSetupEmail } from "@/lib/email/resend";
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
  const orderId = payload.order_id;

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
  const email = payload.Customer?.email;
  const name = payload.Customer?.full_name ?? "";
  const orderId = payload.order_id;
  const subscriptionId = payload.Subscription?.id ?? payload.subscription_id;

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

  // --- Cria ou atualiza o perfil (email vive em auth.users, não duplicamos aqui) ---
  const { error } = await supabaseAdmin.from("profiles").upsert(
    {
      id: userId,
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

  // --- Gera link de recovery e envia e-mail (falha não derruba ativação) ---
  console.log("[kiwify-webhook] RESEND_API_KEY presente:", !!process.env.RESEND_API_KEY);
  try {
    console.log("[kiwify-webhook] iniciando geração de recovery link");
    const recoveryLink = await generateRecoveryLink(email);
    console.log("[kiwify-webhook] recovery link gerado:", !!recoveryLink);

    if (recoveryLink) {
      console.log("[kiwify-webhook] iniciando envio via resend");
      const resendResponse = await sendPasswordSetupEmail({ to: email, name, recoveryLink });
      console.log("[kiwify-webhook] resend respondeu:", JSON.stringify(resendResponse));
    } else {
      console.warn("[kiwify-webhook] recovery link nulo — e-mail não enviado");
    }
  } catch (emailErr) {
    const err = emailErr as Error;
    console.error("[kiwify-webhook] falha no e-mail de ativação — userId:", userId,
      "\nmessage:", err?.message,
      "\nstack:", err?.stack,
    );
  }

  console.log("[kiwify-webhook] order_approved processada — userId:", userId);
}

async function handleSubscriptionRenewed(payload: KiwifyWebhookPayload) {
  const email = payload.Customer?.email;
  if (!email) return;

  const userId = await upsertAuthUser(email);
  if (!userId) return;

  const renewsAt = addDays(30);

  const { error } = await supabaseAdmin
    .from("profiles")
    .update({
      plan: "pro",
      plan_status: "active",
      plan_renews_at: renewsAt.toISOString(),
    })
    .eq("id", userId);

  if (error) {
    console.error("[kiwify-webhook] erro ao renovar plano:", error);
  } else {
    console.log("[kiwify-webhook] subscription_renewed — email:", maskEmail(email));
  }
}

async function handleSubscriptionCanceled(payload: KiwifyWebhookPayload) {
  const email = payload.Customer?.email;
  if (!email) return;

  const userId = await upsertAuthUser(email);
  if (!userId) return;

  const { error } = await supabaseAdmin
    .from("profiles")
    .update({ plan: "free", plan_status: "canceled" })
    .eq("id", userId);

  if (error) {
    console.error("[kiwify-webhook] erro ao cancelar plano:", error);
  } else {
    console.log("[kiwify-webhook] subscription_canceled — email:", maskEmail(email));
  }
}

async function handleSubscriptionLate(payload: KiwifyWebhookPayload) {
  const email = payload.Customer?.email;
  if (!email) return;

  const userId = await upsertAuthUser(email);
  if (!userId) return;

  const { error } = await supabaseAdmin
    .from("profiles")
    .update({ plan: "free", plan_status: "late" })
    .eq("id", userId);

  if (error) {
    console.error("[kiwify-webhook] erro ao marcar inadimplente:", error);
  } else {
    console.log("[kiwify-webhook] subscription_late — email:", maskEmail(email));
  }
}

// ---------------------------------------------------------------------------
// Helpers

async function upsertAuthUser(email: string): Promise<string | null> {
  // 1. Tenta criar — retorna id imediatamente se é um usuário novo
  const { data: created, error: createErr } = await supabaseAdmin.auth.admin.createUser({
    email,
    email_confirm: true,
  });

  if (!createErr && created.user?.id) return created.user.id;

  // 2. Já existe — localiza pelo email em auth.users
  const { data: list } = await supabaseAdmin.auth.admin.listUsers({ page: 1, perPage: 1000 });
  const found = list?.users?.find((u) => u.email === email);
  if (found) return found.id;

  console.error("[kiwify-webhook] não foi possível criar/encontrar usuário:", createErr);
  return null;
}

async function generateRecoveryLink(email: string): Promise<string | null> {
  const { data, error } = await supabaseAdmin.auth.admin.generateLink({
    type: "recovery",
    email,
    options: {
      redirectTo: "https://app.notura.com.br/reset-password",
    },
  });

  if (error) {
    console.error("[kiwify-webhook] erro ao gerar link de recovery:", error);
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
