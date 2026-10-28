import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const LIMITS = { name: 100, email: 254, subject: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Header values must stay on one line.
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json().catch(() => null);
    if (!data || typeof data !== "object") {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const fields = {} as Record<keyof typeof LIMITS, string>;
    for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
      const value = data[key];
      if (typeof value !== "string" || !value.trim()) {
        return NextResponse.json(
          { error: "All fields are required" },
          { status: 400 }
        );
      }
      if (value.length > LIMITS[key]) {
        return NextResponse.json(
          { error: `${key} is too long` },
          { status: 400 }
        );
      }
      fields[key] = key === "message" ? value.trim() : oneLine(value);
    }

    const { name, email, subject, message } = fields;
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send from our own account: Gmail rejects or rewrites a visitor's
    // address in From, and it would let anyone spoof the sender.
    await transporter.sendMail({
      from: { name: `Portfolio: ${name}`, address: process.env.EMAIL_USER! },
      replyTo: { name, address: email },
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
             <p><strong>Email:</strong> ${escapeHtml(email)}</p>
             <p><strong>Message:</strong></p>
             <p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
