import { NextResponse } from "next/server";
import { sendNotificationEmail, buildDetailsHtml } from "@/lib/mailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const subject = typeof body?.subject === "string" ? body.subject.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !subject) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || /[\r\n]/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  try {
    await sendNotificationEmail({
      subject: `New Contact Message: ${subject}`,
      html: `<h2>New Contact Form Submission</h2>${buildDetailsHtml({
        Name: name,
        Email: email,
        Subject: subject,
        Message: message,
      })}`,
      replyTo: email,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact notification email", error);
    return NextResponse.json({ error: "Failed to send notification" }, { status: 502 });
  }
}
