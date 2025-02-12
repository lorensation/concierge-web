import { google } from "googleapis";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const slot = searchParams.get("slot");
    const email = searchParams.get("email");
    const name = searchParams.get("name");

    if (!slot || !email || !name) {
      return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
    }

    // **Autenticación con Google Calendar**
    const serviceAccountKey = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
    serviceAccountKey.private_key = serviceAccountKey.private_key.replace(/\\n/g, "\n");

    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccountKey,
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    const calendar = google.calendar({ version: "v3", auth });
    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    // **Crear evento en Google Calendar**
    const event = {
      summary: `Meeting with ${name}`,
      start: { dateTime: slot, timeZone: "UTC" },
      end: { dateTime: new Date(new Date(slot).getTime() + 30 * 60000).toISOString(), timeZone: "UTC" },
      attendees: [{ email }],
    };

    await calendar.events.insert({ calendarId, resource: event });

    // 📩 **Enviar email de confirmación al usuario**
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Meeting Confirmed",
      html: `<p>Your meeting for ${slot} has been confirmed. Thank you!</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Meeting confirmed" }, { status: 200 });
  } catch (error) {
    console.error("Confirmation error:", error);
    return NextResponse.json({ error: "Failed to confirm booking" }, { status: 500 });
  }
}
