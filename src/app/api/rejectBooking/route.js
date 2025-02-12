import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

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

    return NextResponse.json({ success: true, message: "Meeting rejected" }, { status: 200 });
  } catch (error) {
    console.error("Rejection error:", error);
    return NextResponse.json({ error: "Failed to reject booking" }, { status: 500 });
  }
}
