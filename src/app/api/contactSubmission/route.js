import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const { name, email, message } = await req.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email template
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "infotruchic@gmail.com",
      subject: `New Contact Form Message from ${name}`,
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
              .detail { margin-bottom: 15px; }
              .message { background-color: white; padding: 15px; border-radius: 5px; margin-top: 15px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Message</h1>
              </div>
              <div class="content">
                <div class="detail">
                  <strong>Name:</strong> ${name}
                </div>
                <div class="detail">
                  <strong>Email:</strong> ${email}
                </div>
                <div class="detail">
                  <strong>Message:</strong>
                  <div class="message">
                    ${message.replace(/\n/g, "<br>")}
                  </div>
                </div>
              </div>
              <div class="footer">
                <p>This message was sent from the Truchic Experiences contact form.</p>
                <p>© ${new Date().getFullYear()} Truchic Experiences</p>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}




