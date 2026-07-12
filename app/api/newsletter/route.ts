import { NextResponse } from "next/server";
import { sendNotificationEmail, buildDetailsHtml } from "@/lib/mailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || /[\r\n]/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  try {
    await sendNotificationEmail({
      subject: `New Newsletter Subscriber: ${email}`,
      html: `<h2>New Newsletter Subscription</h2>${buildDetailsHtml({
        Email: email,
      })}`,
      replyTo: email,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send newsletter notification email", error);
    return NextResponse.json({ error: "Failed to send notification" }, { status: 502 });
  }
}
