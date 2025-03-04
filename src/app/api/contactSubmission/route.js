import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "infotruchic@gmail.com",
      subject: "New Contact Form Submission | Truchic Experiences",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1B263B; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0; }
              .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
              </div>
              <div class="content">
                <h2>Contact Details</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <h2>Message</h2>
                <p>${message}</p>
              </div>
              <div class="footer">
                <p>This is an automated message from Truchic Experiences contact form.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Contact form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form submission error:", error)
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 })
  }
}

