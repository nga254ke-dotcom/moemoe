'use server';

import nodemailer from 'nodemailer';
import 'dotenv/config';

interface EmailPayload {
  to: string;
  from: string;
  subject: string;
  html: string;
}

const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

const transporter = nodemailer.createTransport(smtpConfig);

export async function sendEmail(payload: EmailPayload): Promise<void> {
  // Verify connection configuration
  try {
    await transporter.verify();
    console.log("Server is ready to take our messages");
  } catch(error) {
     console.error("Error verifying email transporter:", error);
     throw new Error("Email server connection failed.");
  }

  try {
    const info = await transporter.sendMail({
        from: `"${payload.from.split('@')[0]}" <${process.env.SMTP_USER}>`, // sender address
        to: payload.to, // list of receivers
        subject: payload.subject, // Subject line
        html: payload.html, // html body
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    // In a real implementation, you'd want more robust error handling
    // and maybe a retry mechanism.
    throw new Error("Failed to send email.");
  }
}
