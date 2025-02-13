import { google } from "googleapis";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { format, utcToZonedTime } from "date-fns-tz";

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
      end: { dateTime: new Date(new Date(slot).getTime() + 60 * 60000).toISOString(), timeZone: "UTC" },
    };

    await calendar.events.insert({ calendarId, resource: event });

    // **Enviar email de confirmación al usuario**
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const startDateTime = format(new Date(slot), "yyyyMMdd'T'HHmmss");
    const endDateTime = format(new Date(new Date(slot).getTime() + 60 * 60000), "yyyyMMdd'T'HHmmss");

    const eventLink = `https://calendar.google.com/calendar/r/eventedit?text=Meeting+with+${name}&dates=${startDateTime}/${endDateTime}&details=Your+meeting+is+confirmed&location=&sf=true`;

    const madridTimeZone = "Europe/Madrid";
    const slotDateTimeMadrid = utcToZonedTime(new Date(slot), madridTimeZone);

    const formattedDate = format(slotDateTimeMadrid, "EEEE, dd MMMM yyyy 'at' HH:mm", { locale: es });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Meeting is Confirmed",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd;">
          <h2 style="color: #4A90E2;">Your Meeting Confirmation</h2>
          <p>Hello ${name},</p>
          <p>Your meeting has been successfully confirmed.</p>
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Duration:</strong> 1 hour</p>
          <p>You can add it to your Google Calendar by clicking the button below:</p>
          <a href="${eventLink}" 
            style="background-color: #4A90E2; color: white; padding: 10px 20px; text-decoration: none; display: inline-block; border-radius: 5px;">
            Add to Google Calendar
          </a>
          <p>If you have any questions, feel free to contact us.</p>
          <p>Best regards,<br/>The Truchic Team</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Meeting confirmed" }, { status: 200 });
  } catch (error) {
    console.error("Confirmation error:", error);
    return NextResponse.json({ error: "Failed to confirm booking" }, { status: 500 });
  }
}
