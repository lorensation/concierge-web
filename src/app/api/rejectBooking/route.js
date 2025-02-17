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

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Meeting Request Denied",
      html: `<p>Unfortunately, your requested time slot is unavailable. Please book a new slot.</p>`,
    };

    await transporter.sendMail(mailOptions);

    // Use the provided redirect URL or fall back to the default
    return NextResponse.redirect(redirect || `${process.env.FRONTEND_URL}/booking-response?action=rejected`);
  } catch (error) {
    console.error("Rejection error:", error);
    return NextResponse.redirect(`${process.env.FRONTEND_URL}/booking-response?action=error`);
  }
}
