import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "RESEND_API_KEY no está configurada" },
      { status: 500 }
    );
  }
  const resend = new Resend(apiKey);

  const { nombre, empresa, email, mensaje } = await req.json();

  const siteUrl = process.env.SITE_URL ?? "";
  const logoUrl = `${siteUrl}/images/logo.png`;

  const html = `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f7;padding:40px 0">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

          <!-- Header -->
          <tr>
            <td style="background:#ffffff;border-radius:20px 20px 0 0;padding:32px 40px;text-align:center;border:1px solid #41a14040;border-bottom:none">
              <img src="${logoUrl}" alt="Cereazúcar" height="68" style="display:block;margin:0 auto" />
              <p style="margin:16px 0 0;color:#a2aaad;font-size:13px;letter-spacing:0.08em;text-transform:uppercase">Mensaje de Contacto</p>
            </td>
          </tr>

          <!-- Green accent bar -->
          <tr>
            <td style="background:#41a140;height:4px;line-height:4px;font-size:4px;border-left:1px solid #41a14040;border-right:1px solid #41a14040">&nbsp;</td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:40px 40px 32px;border:1px solid #41a14040;border-top:none;border-bottom:none">

              <h2 style="margin:0 0 6px;font-size:22px;font-weight:600;color:#1d1d1f;letter-spacing:-0.4px">
                Nuevo mensaje de contacto
              </h2>
              <p style="margin:0 0 32px;font-size:15px;color:#a2aaad">
                ${nombre} te dejó un mensaje desde la landing.
              </p>

              <!-- Contact info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f7;border:1px solid #41a14040;border-radius:12px;margin-bottom:32px;overflow:hidden">
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #eee">
                    <span style="font-size:11px;color:#a2aaad;text-transform:uppercase;letter-spacing:0.08em;display:block;margin-bottom:4px">Nombre</span>
                    <span style="font-size:15px;color:#1d1d1f;font-weight:500">${nombre}</span>
                  </td>
                </tr>
                ${empresa ? `
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #eee">
                    <span style="font-size:11px;color:#a2aaad;text-transform:uppercase;letter-spacing:0.08em;display:block;margin-bottom:4px">Empresa</span>
                    <span style="font-size:15px;color:#1d1d1f;font-weight:500">${empresa}</span>
                  </td>
                </tr>` : ""}
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #eee">
                    <span style="font-size:11px;color:#a2aaad;text-transform:uppercase;letter-spacing:0.08em;display:block;margin-bottom:4px">Correo</span>
                    <a href="mailto:${email}" style="font-size:15px;color:#41a140;font-weight:500;text-decoration:none">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 20px">
                    <span style="font-size:11px;color:#a2aaad;text-transform:uppercase;letter-spacing:0.08em;display:block;margin-bottom:4px">Mensaje</span>
                    <span style="font-size:15px;color:#1d1d1f;line-height:1.6">${mensaje}</span>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Contacto Cereazúcar" style="display:inline-block;background:#41a140;color:white;font-size:15px;font-weight:500;text-decoration:none;padding:13px 32px;border-radius:99px">
                      Responder a ${nombre}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f5f5f7;border-radius:0 0 20px 20px;padding:24px 40px;text-align:center;border:1px solid #41a14040;border-top:1px solid #41a14040">
              <p style="margin:0;font-size:12px;color:#a2aaad">
                Cereazúcar — Empaquetado y distribución de granos básicos<br>
                100% Colimense · 30+ años de experiencia
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const { error } = await resend.emails.send({
    from: "Cereazúcar <onboarding@resend.dev>",
    to: process.env.COTIZACION_TO_EMAIL!,
    replyTo: email,
    subject: `Nuevo lead: ${nombre}${empresa ? ` · ${empresa}` : ""} — sitio web Cereazúcar`,
    html,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
