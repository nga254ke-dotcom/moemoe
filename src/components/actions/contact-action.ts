'use server';

import { z } from 'zod';
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

const emailStyles = {
  body: `font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 0;`,
  container: `max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);`,
  header: `text-align: center; border-bottom: 1px solid #ddd; padding-bottom: 20px; margin-bottom: 20px;`,
  logo: `max-width: 180px;`,
  content: ``,
  footer: `text-align: center; font-size: 12px; color: #777; margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;`,
  card: `border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; margin-bottom: 20px;`,
  h1: `color: #0a256e; font-size: 24px;`,
  h2: `color: #0a256e; font-size: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-top: 0;`,
  p: `margin-bottom: 10px;`,
  strong: `color: #0a256e;`
};

const EmailTemplate = ({ children }: { children: string }) => `
  <body style="${emailStyles.body}">
    <div style="${emailStyles.container}">
      <div style="${emailStyles.header}">
        <img src="https://i.imgur.com/3euCN8r.png" alt="MoeMoe Enterprises Logo" style="${emailStyles.logo}" />
      </div>
      <div style="${emailStyles.content}">
        ${children}
      </div>
      <div style="${emailStyles.footer}">
        <p>&copy; ${new Date().getFullYear()} MoeMoe Enterprises LLC. All rights reserved.</p>
        <p>4936 Presidents Way #206, Tucker, GA 30084</p>
      </div>
    </div>
  </body>
`;


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
  
  const { name, email, subject, message } = parsed.data;

  try {
    // Send email to admin
    const adminEmailHtml = EmailTemplate({
        children: `
          <div style="${emailStyles.card}">
            <h2 style="${emailStyles.h2}">New Contact Message</h2>
            <p style="${emailStyles.p}">You have received a new message from the website contact form.</p>
            <p style="${emailStyles.p}"><strong style="${emailStyles.strong}">Name:</strong> ${name}</p>
            <p style="${emailStyles.p}"><strong style="${emailStyles.strong}">Email:</strong> ${email}</p>
            <p style="${emailStyles.p}"><strong style="${emailStyles.strong}">Subject:</strong> ${subject}</p>
          </div>
          <div style="${emailStyles.card}">
            <h2 style="${emailStyles.h2}">Message</h2>
            <p style="${emailStyles.p}">${message}</p>
          </div>
        `,
      });

    await sendEmail({
      to: 'info@moemoeenterprise.com',
      from: 'orders@moemoeenterprise.com',
      subject: `New Contact Form Message: ${subject}`,
      html: adminEmailHtml,
    });

    // Send a confirmation email to the user
    const userEmailHtml = EmailTemplate({
        children: `
          <h1 style="${emailStyles.h1}">We've received your message!</h1>
          <p style="${emailStyles.p}">Hello ${name},</p>
          <p style="${emailStyles.p}">Thank you for contacting MoeMoe Enterprises. We have received your message and will get back to you as soon as possible.</p>
          <p style="${emailStyles.p}">Best regards,<br/>The MoeMoe Enterprises Team</p>
        `,
      });

    await sendEmail({
      to: email,
      from: 'orders@moemoeenterprise.com',
      subject: 'We have received your message',
      html: userEmailHtml,
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
