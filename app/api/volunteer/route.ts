import { NextResponse } from "next/server";
import { sendNotificationEmail, buildDetailsHtml } from "@/lib/mailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
  const location = typeof body?.location === "string" ? body.location.trim() : "";
  const skills = typeof body?.skills === "string" ? body.skills.trim() : "";
  const availability = typeof body?.availability === "string" ? body.availability.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !phone || !location) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || /[\r\n]/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  try {
    await sendNotificationEmail({
      subject: `New Volunteer Sign-Up: ${name}`,
      html: `<h2>New Volunteer Sign-Up</h2>${buildDetailsHtml({
        Name: name,
        Email: email,
        Phone: phone,
        Location: location,
        "Skills / Area of Interest": skills,
        Availability: availability,
        Message: message,
      })}`,
      replyTo: email,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send volunteer notification email", error);
    return NextResponse.json({ error: "Failed to send notification" }, { status: 502 });
  }
}
