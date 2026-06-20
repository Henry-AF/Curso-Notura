import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

const FROM_ADDRESS = "Notura <no-reply@notura.com.br>";

export async function sendActivationEmail(params: {
  to: string;
  name: string;
  magicLink: string;
}) {
  const { to, name, magicLink } = params;

  return resend.emails.send({
    from: FROM_ADDRESS,
    to,
    subject: "Seu acesso ao Notura está ativo!",
    html: buildActivationHtml({ name, magicLink }),
  });
}

export async function sendPasswordSetupEmail(params: {
  to: string;
  name: string;
  recoveryLink: string;
}) {
  const { to, name, recoveryLink } = params;

  return resend.emails.send({
    from: FROM_ADDRESS,
    to,
    subject: "Defina sua senha — seu plano Pro Notura está ativo!",
    html: buildPasswordSetupHtml({ name, recoveryLink }),
  });
}

export async function sendExpirationWarningEmail(params: {
  to: string;
  name: string;
  expiresAt: Date;
}) {
  const { to, name, expiresAt } = params;

  const formattedDate = expiresAt.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return resend.emails.send({
    from: FROM_ADDRESS,
    to,
    subject: "Seu plano Notura expira em breve",
    html: buildExpirationHtml({ name, formattedDate }),
  });
}

function buildActivationHtml(params: {
  name: string;
  magicLink: string;
}): string {
  const { name, magicLink } = params;
  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#111;border-radius:12px;overflow:hidden;border:1px solid #222;">
          <tr>
            <td style="background:linear-gradient(135deg,#1a1a2e,#16213e);padding:40px;text-align:center;">
              <h1 style="color:#c8a96e;margin:0;font-size:28px;letter-spacing:2px;">NOTURA</h1>
              <p style="color:#888;margin:8px 0 0;font-size:13px;letter-spacing:4px;">REUNIÕES COM INTELIGÊNCIA</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <h2 style="color:#fff;margin:0 0 16px;font-size:22px;">Olá, ${name}! 🎉</h2>
              <p style="color:#aaa;line-height:1.7;margin:0 0 24px;">
                Sua compra foi confirmada e seu plano <strong style="color:#c8a96e;">Pro</strong> já está ativo.
                Clique no botão abaixo para acessar o Notura agora mesmo — sem precisar criar senha.
              </p>
              <table cellpadding="0" cellspacing="0" style="margin:32px 0;">
                <tr>
                  <td align="center">
                    <a href="${magicLink}"
                       style="display:inline-block;background:#c8a96e;color:#0a0a0a;text-decoration:none;
                              font-weight:700;font-size:16px;padding:16px 40px;border-radius:8px;letter-spacing:1px;">
                      Acessar minha conta →
                    </a>
                  </td>
                </tr>
              </table>
              <p style="color:#555;font-size:13px;line-height:1.6;margin:0;">
                O link acima é de uso único e expira em 1 hora. Se você não realizou esta compra,
                ignore este e-mail.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #222;text-align:center;">
              <p style="color:#555;font-size:12px;margin:0;">
                © ${new Date().getFullYear()} Notura. Todos os direitos reservados.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function buildPasswordSetupHtml(params: {
  name: string;
  recoveryLink: string;
}): string {
  const { name, recoveryLink } = params;
  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#111;border-radius:12px;overflow:hidden;border:1px solid #222;">
          <tr>
            <td style="background:linear-gradient(135deg,#1a1a2e,#16213e);padding:40px;text-align:center;">
              <h1 style="color:#c8a96e;margin:0;font-size:28px;letter-spacing:2px;">NOTURA</h1>
              <p style="color:#888;margin:8px 0 0;font-size:13px;letter-spacing:4px;">REUNIÕES COM INTELIGÊNCIA</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <h2 style="color:#fff;margin:0 0 16px;font-size:22px;">Olá, ${name}! 🎉</h2>
              <p style="color:#aaa;line-height:1.7;margin:0 0 16px;">
                Sua compra foi aprovada e o seu plano <strong style="color:#c8a96e;">Pro</strong> do Notura já está ativo.
              </p>
              <p style="color:#aaa;line-height:1.7;margin:0 0 24px;">
                Para acessar sua conta, clique no botão abaixo e defina sua senha de acesso.
                O link é válido por tempo limitado, então acesse em breve.
              </p>
              <table cellpadding="0" cellspacing="0" style="margin:32px 0;">
                <tr>
                  <td align="center">
                    <a href="${recoveryLink}"
                       style="display:inline-block;background:#c8a96e;color:#0a0a0a;text-decoration:none;
                              font-weight:700;font-size:16px;padding:16px 40px;border-radius:8px;letter-spacing:1px;">
                      Definir minha senha →
                    </a>
                  </td>
                </tr>
              </table>
              <p style="color:#555;font-size:13px;line-height:1.6;margin:0;">
                Se você não realizou esta compra, ignore este e-mail.
                O link expira automaticamente e sua conta não será afetada.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #222;text-align:center;">
              <p style="color:#555;font-size:12px;margin:0;">
                © ${new Date().getFullYear()} Notura. Todos os direitos reservados.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function buildExpirationHtml(params: {
  name: string;
  formattedDate: string;
}): string {
  const { name, formattedDate } = params;
  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#111;border-radius:12px;overflow:hidden;border:1px solid #222;">
          <tr>
            <td style="background:linear-gradient(135deg,#1a1a2e,#16213e);padding:40px;text-align:center;">
              <h1 style="color:#c8a96e;margin:0;font-size:28px;letter-spacing:2px;">NOTURA</h1>
              <p style="color:#888;margin:8px 0 0;font-size:13px;letter-spacing:4px;">REUNIÕES COM INTELIGÊNCIA</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <h2 style="color:#fff;margin:0 0 16px;font-size:22px;">Olá, ${name}!</h2>
              <p style="color:#aaa;line-height:1.7;margin:0 0 16px;">
                Seu plano Pro do Notura expira em <strong style="color:#c8a96e;">${formattedDate}</strong>.
              </p>
              <p style="color:#aaa;line-height:1.7;margin:0 0 24px;">
                Para continuar tendo acesso a transcrição automática, resumos e tarefas geradas por IA,
                renove agora com um clique:
              </p>
              <table cellpadding="0" cellspacing="0" style="margin:32px 0;">
                <tr>
                  <td align="center">
                    <a href="https://pay.kiwify.com.br/sNuERYe"
                       style="display:inline-block;background:#c8a96e;color:#0a0a0a;text-decoration:none;
                              font-weight:700;font-size:16px;padding:16px 40px;border-radius:8px;letter-spacing:1px;">
                      Renovar plano Pro →
                    </a>
                  </td>
                </tr>
              </table>
              <p style="color:#555;font-size:13px;line-height:1.6;margin:0;">
                Se você já renovou recentemente, desconsidere este aviso.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #222;text-align:center;">
              <p style="color:#555;font-size:12px;margin:0;">
                © ${new Date().getFullYear()} Notura. Todos os direitos reservados.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
