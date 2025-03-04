import { google } from "googleapis";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { format } from "date-fns";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const slot = searchParams.get("slot");
    const email = searchParams.get("email");
    const name = searchParams.get("name");
    const redirect = searchParams.get("redirect");

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
      start: { dateTime: slot, timeZone: "Europe/Madrid" }, // Zona horaria Madrid
      end: { 
        dateTime: new Date(new Date(slot).getTime() + 60 * 60000).toISOString(), 
        timeZone: "Europe/Madrid" 
      },
    };

    await calendar.events.insert({ calendarId, resource: event });

    // **Enviar email de confirmación al usuario**
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    // **Convertir fecha correctamente para Google Calendar y email**
    const startDateTimeMadrid = new Date(slot);
    const endDateTimeMadrid = new Date(startDateTimeMadrid.getTime() + 60 * 60000);

    const startDateTime = format(startDateTimeMadrid, "yyyyMMdd'T'HHmmss");
    const endDateTime = format(endDateTimeMadrid, "yyyyMMdd'T'HHmmss");

    const eventLink = `https://calendar.google.com/calendar/r/eventedit?text=Meeting+with+${name}&dates=${startDateTime}/${endDateTime}&details=Your+meeting+is+confirmed&location=&sf=true`;

    // **Formatear la fecha correctamente en español sin paquetes extra**
    const options = { weekday: "long", day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit", timeZone: "Europe/Madrid" };
    const formattedDate = startDateTimeMadrid.toLocaleDateString("es-ES", options);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Luxury Consultation is Confirmed | Truchic Experiences",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1B263B; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0; }
              .button { display: inline-block; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 10px; background-color: #1B263B; color: white; }
              .details { background-color: white; padding: 15px; border-radius: 5px; margin: 20px 0; }
              .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
              .social-links { margin: 20px 0; text-align: center; }
              .social-links a { margin: 0 10px; color: #1B263B; text-decoration: none; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Your Luxury Consultation is Confirmed</h1>
              </div>
              <div class="content">
                <p>Dear ${name},</p>
                <p>We are delighted to confirm your luxury consultation with Truchic Experiences.</p>
                
                <div class="details">
                  <h2>Consultation Details</h2>
                  <p><strong>Date:</strong> ${formattedDate}</p>
                  <p><strong>Duration:</strong> 1 hour</p>
                  <p><strong>Format:</strong> Video Conference</p>
                </div>

                <p>To prepare for your consultation, please:</p>
                <ul>
                  <li>Have your travel preferences and dates ready</li>
                  <li>Prepare any specific questions or requirements</li>
                  <li>Ensure you have a stable internet connection</li>
                </ul>

                <div style="text-align: center; margin: 30px 0;">
                  <a href="${eventLink}" class="button">Add to Calendar</a>
                </div>

                <p><strong>Need to reschedule?</strong> Please contact us at least 24 hours before your appointment.</p>
              </div>

              <div class="social-links">
                <p>Follow us for luxury travel inspiration:</p>
                <a href="#">Instagram</a> |
                <a href="#">Facebook</a> |
                <a href="#">LinkedIn</a>
              </div>

              <div class="footer">
                <p>By proceeding with this consultation, you agree to our <a href="${frontendUrl}/terms">Terms and Conditions</a> and <a href="${frontendUrl}/privacy">Privacy Policy</a>.</p>
                <p>© ${new Date().getFullYear()} Truchic Experiences. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    await transporter.sendMail(mailOptions);

    // Use the provided redirect URL or fall back to the default
    return NextResponse.redirect(redirect || `${process.env.FRONTEND_URL}/booking-response?action=accepted`);
  } catch (error) {
    console.error("Confirmation error:", error);
    return NextResponse.redirect(`${process.env.FRONTEND_URL}/booking-response?action=error`);
  }
}
