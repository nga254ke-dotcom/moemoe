'use server';

import { z } from 'zod';
// This is a placeholder. In a real app, you would use a service like Resend or Nodemailer.
import { sendEmail } from '@/lib/email'; 

const ContactActionSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters long.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }),
});

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function sendContactMessageAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = ContactActionSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: 'Invalid form data.',
      issues,
      fields: {
        name: formData.name as string,
        email: formData.email as string,
        subject: formData.subject as string,
        message: formData.message as string,
      }
    };
  }

  try {
    // Send email to admin
    await sendEmail({
      to: 'info@moemoeenterprise.com',
      from: 'website@moemoeenterprise.com',
      subject: `New Contact Form Message: ${parsed.data.subject}`,
      html: `
        <p>You have received a new message from the website contact form.</p>
        <p><strong>Name:</strong> ${parsed.data.name}</p>
        <p><strong>Email:</strong> ${parsed.data.email}</p>
        <p><strong>Subject:</strong> ${parsed.data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${parsed.data.message}</p>
      `,
    });

    // Optionally, send a confirmation email to the user
    await sendEmail({
      to: parsed.data.email,
      from: 'noreply@moemoeenterprise.com',
      subject: 'We have received your message',
      html: `
        <p>Hello ${parsed.data.name},</p>
        <p>Thank you for contacting MoeMoe Enterprises. We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br/>The MoeMoe Team</p>
      `,
    });

    return {
      message: 'Message sent successfully!',
    };
  } catch (error) {
    console.error('Contact Form Error:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
