import nodemailer from 'nodemailer';
import config from '../config/env.js';

const transporter = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  secure: false, // true for 465
  auth: {
    user: config.email.user,
    pass: config.email.pass
  }
});

export const sendConfirmationEmail = async (emailDetails) => {
  try {
    const info = await transporter.sendMail({
      from: `"Concierge Service" <${config.email.from}>`,
      to: emailDetails.to,
      subject: emailDetails.subject,
      text: emailDetails.text
    });

    return info;
  } catch (error) {
    throw new Error(`Email service error: ${error.message}`);
  }
};