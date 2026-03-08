import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const subject = String(body?.subject ?? "").trim();
    const message = String(body?.message ?? "").trim();
    const company = String(body?.company ?? "").trim();
    const formStartedAt = Number(body?.formStartedAt ?? 0);

    if (company) {
      return NextResponse.json(
        { message: "Spam detected." },
        { status: 400 }
      );
    }

    const now = Date.now();
    const elapsed = formStartedAt ? now - formStartedAt : 0;

    if (!formStartedAt || elapsed < 3000) {
      return NextResponse.json(
        { message: "Form submitted too quickly." },
        { status: 400 }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { message: "RESEND_API_KEY is not configured." },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_FROM_EMAIL || !process.env.CONTACT_TO_EMAIL) {
      return NextResponse.json(
        { message: "Contact email environment variables are not configured." },
        { status: 500 }
      );
    }

    const safeSubject = subject || "Portfolio message";

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `[Portfolio] ${safeSubject}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin-bottom: 16px;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(safeSubject)}</p>
          <div style="margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <div style="white-space: pre-wrap;">${escapeHtml(message)}</div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("CONTACT_API_ERROR", error);

    return NextResponse.json(
      { message: "Failed to send message." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}