import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "invalid_input" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !to) {
    console.error(
      "Brak RESEND_API_KEY lub CONTACT_EMAIL_TO w zmiennych środowiskowych."
    );
    return NextResponse.json(
      { ok: false, error: "server_not_configured" },
      { status: 500 }
    );
  }

  const { name, email, phone, projectType, budget, message } = parsed.data;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `Nowe zapytanie z portfolio od ${name}`,
    text: [
      `Imię i nazwisko: ${name}`,
      `E-mail: ${email}`,
      `Telefon: ${phone || "nie podano"}`,
      `Rodzaj projektu: ${projectType}`,
      `Budżet: ${budget}`,
      "",
      "Wiadomość:",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { ok: false, error: "send_failed" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
