import { google } from "googleapis";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { slot, user } = await req.json();

    if (!slot || !user) {
      return NextResponse.json(
        { error: "Missing slot or user information" },
        { status: 400 }
      );
    }

    const adminEmail = process.env.BOOKING_NOTIFICATION_EMAIL;
    const frontendUrl = process.env.FRONTEND_URL; // Asegúrate de configurar esto en tus variables de entorno

    // 📩 **Enviar email de solicitud de reserva**
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const acceptLink = `${frontendUrl}/api/confirmBooking?slot=${encodeURIComponent(
      slot
    )}&email=${encodeURIComponent(user.email)}&name=${encodeURIComponent(user.name)}`;

    const rejectLink = `${frontendUrl}/api/rejectBooking?email=${encodeURIComponent(
      user.email
    )}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: "New Booking Request",
      html: `
        <p><strong>New meeting request</strong></p>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Requested Slot:</strong> ${slot}</p>
        <p>Please choose an action:</p>
        <a href="${acceptLink}" style="background-color: green; color: white; padding: 10px; text-decoration: none;">Accept</a>
        &nbsp;
        <a href="${rejectLink}" style="background-color: red; color: white; padding: 10px; text-decoration: none;">Reject</a>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Booking request sent for approval" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json({ error: "Failed to process booking" }, { status: 500 });
  }
}
