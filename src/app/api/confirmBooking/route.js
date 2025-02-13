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

    // **Autenticación con Google Calendar usando Domain-Wide Delegation**
    const serviceAccountKey = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
    serviceAccountKey.private_key = serviceAccountKey.private_key.replace(/\\n/g, "\n");

    const auth = new google.auth.JWT({
      email: serviceAccountKey.client_email,
      key: serviceAccountKey.private_key,
      scopes: ["https://www.googleapis.com/auth/calendar"],
      subject: process.env.GOOGLE_CALENDAR_ADMIN_EMAIL, 
    });

    const calendar = google.calendar({ version: "v3", auth });
    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    // **Crear evento en Google Calendar**
    const event = {
      summary: `Meeting with ${name}`,
      start: { dateTime: slot, timeZone: "UTC" },
      end: { dateTime: new Date(new Date(slot).getTime() + 30 * 60000).toISOString(), timeZone: "UTC" },
    };

    await calendar.events.insert({ calendarId, resource: event });

    // **Enviar email de confirmación al usuario**
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const eventLink = `https://calendar.google.com/calendar/r/eventedit?text=Meeting+with+${name}&dates=${encodeURIComponent(slot)}/${encodeURIComponent(new Date(new Date(slot).getTime() + 30 * 60000).toISOString())}&details=Your+meeting+is+confirmed&location=&sf=true`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Meeting Confirmed",
      html: `<p>Your meeting for ${slot} has been confirmed.</p>
            <p>You can add it to your Google Calendar by <a href="${eventLink}">clicking here</a>.</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Meeting confirmed" }, { status: 200 });
  } catch (error) {
    console.error("Confirmation error:", error);
    return NextResponse.json({ error: "Failed to confirm booking" }, { status: 500 });
  }
}
