import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const redirect = searchParams.get("redirect");

    if (!email) {
      return NextResponse.json({ error: "Missing email parameter" }, { status: 400 });
    }

    // 📩 **Enviar email de rechazo al usuario**
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    // Update the email template in the rejectBooking route
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Regarding Your Consultation Request | Truchic Experiences",
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
              .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
              .social-links { margin: 20px 0; text-align: center; }
              .social-links a { margin: 0 10px; color: #1B263B; text-decoration: none; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Regarding Your Consultation Request</h1>
              </div>
              <div class="content">
                <p>Dear valued client,</p>
                <p>Thank you for your interest in Truchic Experiences' luxury travel services.</p>
                <p>Unfortunately, we are unable to accommodate your requested consultation time. This could be due to:</p>
                <ul>
                  <li>Schedule conflicts with existing appointments</li>
                  <li>Technical maintenance periods</li>
                  <li>Temporary unavailability of our luxury travel experts</li>
                </ul>
                
                <p>We would be delighted to find an alternative time that works better for you.</p>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${frontendUrl}/booking" class="button">Schedule New Consultation</a>
                </div>
              </div>

              <div class="social-links">
                <p>Follow us for luxury travel inspiration:</p>
                <a href="#">Instagram</a> |
                <a href="#">Facebook</a> |
                <a href="#">LinkedIn</a>
              </div>

              <div class="footer">
                <p>This email is covered by our <a href="${process.env.FRONTEND_URL}/privacy">Privacy Policy</a>.</p>
                <p>© ${new Date().getFullYear()} Truchic Experiences. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    await transporter.sendMail(mailOptions);

    // Use the provided redirect URL or fall back to the default
    return NextResponse.redirect(redirect || `${process.env.FRONTEND_URL}/booking-response?action=rejected`);
  } catch (error) {
    console.error("Rejection error:", error);
    return NextResponse.redirect(`${process.env.FRONTEND_URL}/booking-response?action=error`);
  }
}
