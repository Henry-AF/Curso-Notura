import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { sendExpirationWarningEmail } from "@/lib/email/resend";

// Chamado 1x/dia pelo Cloudflare Cron Trigger (via fetch interno) ou por
// serviço externo. Proteção via header x-cron-secret.
export async function GET(request: NextRequest) {
  const secret = request.headers.get("x-cron-secret");
  if (!secret || secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const now = new Date();
  const in3Days = new Date(now);
  in3Days.setDate(in3Days.getDate() + 3);

  // Busca usuários Pro cujo plano vence nos próximos 3 dias
  const { data: expiring, error } = await supabaseAdmin
    .from("profiles")
    .select("email, plan_renews_at")
    .eq("plan", "pro")
    .eq("plan_status", "active")
    .gte("plan_renews_at", now.toISOString())
    .lte("plan_renews_at", in3Days.toISOString());

  if (error) {
    console.error("[cron/expiring-plans] erro na query:", error);
    return NextResponse.json({ error: "query failed" }, { status: 500 });
  }

  const results = { sent: 0, failed: 0 };

  for (const profile of expiring ?? []) {
    try {
      await sendExpirationWarningEmail({
        to: profile.email,
        name: profile.email.split("@")[0],
        expiresAt: new Date(profile.plan_renews_at),
      });
      results.sent++;
    } catch (err) {
      console.error("[cron/expiring-plans] falha ao enviar e-mail:", profile.email, err);
      results.failed++;
    }
  }

  console.log("[cron/expiring-plans] concluído:", results);
  return NextResponse.json({ ok: true, ...results });
}
