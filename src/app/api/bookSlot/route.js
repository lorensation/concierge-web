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
    )}&email=${encodeURIComponent(user.email)}&name=${encodeURIComponent(
      user.name
    )}&redirect=${encodeURIComponent(`${frontendUrl}/booking-response?action=accepted`)}`;

    const rejectLink = `${frontendUrl}/api/rejectBooking?email=${encodeURIComponent(
      user.email
    )}&redirect=${encodeURIComponent(`${frontendUrl}/booking-response?action=rejected`)}`;

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
        <div style="margin-top: 20px;">
          <a href="${acceptLink}" 
             style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">
             Accept Meeting
          </a>
          <a href="${rejectLink}" 
             style="background-color: #f44336; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
             Reject Meeting
          </a>
        </div>
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
