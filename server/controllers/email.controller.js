import { sendConfirmationEmail } from '../services/email.service.js';

export const sendEmail = async (req, res, next) => {
  try {
    const { to, subject, text } = req.body;
    
    const info = await sendConfirmationEmail({
      to,
      subject,
      text
    });

    res.status(200).json({
      success: true,
      messageId: info.messageId
    });
  } catch (error) {
    next(error);
  }
};