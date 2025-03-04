import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { format } from "date-fns"

export async function POST(req) {
  try {
    const { slot, user } = await req.json()

    if (!slot || !user) {
      return NextResponse.json({ error: "Missing slot or user information" }, { status: 400 })
    }

    const adminEmail = process.env.BOOKING_NOTIFICATION_EMAIL
    const frontendUrl = process.env.FRONTEND_URL

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const formattedDate = format(new Date(slot), "EEEE, MMMM do yyyy 'at' HH:mm")
    const acceptLink = `${frontendUrl}/api/confirmBooking?slot=${encodeURIComponent(
      slot,
    )}&email=${encodeURIComponent(user.email)}&name=${encodeURIComponent(
      user.name,
    )}&redirect=${encodeURIComponent(`${frontendUrl}/booking-response?action=accepted`)}`

    const rejectLink = `${frontendUrl}/api/rejectBooking?email=${encodeURIComponent(
      user.email,
    )}&redirect=${encodeURIComponent(`${frontendUrl}/booking-response?action=rejected`)}`

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: "New Luxury Consultation Request | Truchic Experiences",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1B263B; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0; }
              .button { display: inline-block; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 10px; }
              .accept { background-color: #4CAF50; color: white; }
              .reject { background-color: #f44336; color: white; }
              .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Luxury Consultation Request</h1>
              </div>
              <div class="content">
                <h2>Client Details</h2>
                <p><strong>Name:</strong> ${user.name} ${user.surname}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Requested Date:</strong> ${formattedDate}</p>
                
                <h2>Actions Required</h2>
                <p>Please review this booking request and choose an action:</p>
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${acceptLink}" class="button accept">Accept Consultation</a>
                  <a href="${rejectLink}" class="button reject">Decline Request</a>
                </div>
              </div>
              <div class="footer">
                <p>This is an automated message from Truchic Experiences.</p>
                <p>Please do not reply directly to this email.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Booking request sent for approval" }, { status: 200 })
  } catch (error) {
    console.error("Booking error:", error)
    return NextResponse.json({ error: "Failed to process booking" }, { status: 500 })
  }
}

