import { NextResponse } from "next/server";
import { sendNotificationEmail, buildDetailsHtml } from "@/lib/mailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
  const amount = typeof body?.amount === "string" ? body.amount.trim() : "";

  if (!name || !email || !phone || !amount) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || /[\r\n]/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }
  if (!Number.isFinite(Number(amount)) || Number(amount) <= 0) {
    return NextResponse.json({ error: "Invalid donation amount" }, { status: 400 });
  }

  try {
    await sendNotificationEmail({
      subject: `New Donation Intent — £${amount} from ${name}`,
      html: `<h2>New Donation Submission</h2>${buildDetailsHtml({
        Name: name,
        Email: email,
        Phone: phone,
        "Amount (£)": amount,
      })}`,
      replyTo: email,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send donation notification email", error);
    return NextResponse.json({ error: "Failed to send notification" }, { status: 502 });
  }
}
