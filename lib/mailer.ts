import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.ZEPTOMAIL_SMTP_HOST,
      port: Number(process.env.ZEPTOMAIL_SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.ZEPTOMAIL_SMTP_USER,
        pass: process.env.ZEPTOMAIL_SMTP_PASS,
      },
    });
  }
  return transporter;
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function buildDetailsHtml(fields: Record<string, string>) {
  const rows = Object.entries(fields)
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#6b7280;font-weight:600;">${escapeHtml(
          label
        )}</td><td style="padding:6px 0;color:#16191c;">${escapeHtml(
          value
        ).replace(/\n/g, "<br/>")}</td></tr>`
    )
    .join("");

  return `<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">${rows}</table>`;
}

export async function sendNotificationEmail({
  subject,
  html,
  replyTo,
}: {
  subject: string;
  html: string;
  replyTo?: string;
}) {
  await getTransporter().sendMail({
    from: `"${process.env.ZEPTOMAIL_FROM_NAME}" <${process.env.ZEPTOMAIL_FROM_EMAIL}>`,
    to: process.env.ZEPTOMAIL_TO_EMAIL,
    subject,
    html,
    ...(replyTo ? { replyTo } : {}),
  });
}
