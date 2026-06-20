import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { sendActivationEmail } from "@/lib/email/resend";
import type { KiwifyWebhookPayload } from "@/lib/kiwify/types";

const HANDLED_EVENTS = new Set([
  "compra_aprovada",
  "subscription_renewed",
  "subscription_canceled",
  "subscription_late",
]);

export async function POST(request: NextRequest) {
  let rawPayload: unknown;

  try {
    rawPayload = await request.json();
  } catch {
    console.error("[kiwify-webhook] payload inválido — não é JSON");
    return NextResponse.json({ error: "invalid payload" }, { status: 400 });
  }

  const payload = rawPayload as KiwifyWebhookPayload;
  const event = payload?.event ?? "desconhecido";

  // --- Validação do token de segurança (token vem no corpo do payload) ---
  const expectedToken = process.env.KIWIFY_WEBHOOK_TOKEN;
  if (!expectedToken) {
    console.error("[kiwify-webhook] KIWIFY_WEBHOOK_TOKEN não configurado");
    return NextResponse.json({ error: "server misconfigured" }, { status: 500 });
  }

  if (!payload.token || payload.token !== expectedToken) {
    console.warn("[kiwify-webhook] token inválido — evento:", event);
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  // Loga o evento recebido (sem expor o token nem dados sensíveis)
  const safeLog = {
    event,
    orderId: payload.data?.id,
    customerEmail: maskEmail(payload.data?.Customer?.email),
    subscriptionId: payload.data?.Subscription?.id,
  };
  console.log("[kiwify-webhook] recebido:", JSON.stringify(safeLog));

  // Ignora eventos não tratados (Kiwify não vai ficar reprocessando)
  if (!HANDLED_EVENTS.has(event)) {
    console.log("[kiwify-webhook] evento ignorado:", event);
    return NextResponse.json({ received: true });
  }

  try {
    switch (event) {
      case "compra_aprovada":
        await handleCompraAprovada(payload);
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
  } catch (err) {
    // Não derruba o endpoint — Kiwify não reprocessa se receber 200
    console.error("[kiwify-webhook] erro ao processar evento:", event, err);
  }

  return NextResponse.json({ received: true });
}

// ---------------------------------------------------------------------------

async function handleCompraAprovada(payload: KiwifyWebhookPayload) {
  const { data } = payload;
  const email = data.Customer?.email;
  const name = data.Customer?.full_name ?? "";
  const orderId = data.id;
  const subscriptionId = data.Subscription?.id;

  if (!email) {
    console.warn("[kiwify-webhook] compra_aprovada sem e-mail de cliente");
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

  console.log("[kiwify-webhook] compra_aprovada processada — userId:", userId);
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

function maskEmail(email?: string): string {
  if (!email) return "(sem e-mail)";
  const [local, domain] = email.split("@");
  return `${local.slice(0, 2)}***@${domain}`;
}
