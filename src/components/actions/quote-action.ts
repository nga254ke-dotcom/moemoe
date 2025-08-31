
'use server';

import { z } from 'zod';
import { sendEmail } from '@/lib/email'; 

const QuoteActionSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().optional(),
  service: z.enum(['courier', 'cleaning', 'other'], {
    errorMap: () => ({ message: "Please select a valid service." }),
  }),
  address: z.string().optional(),
  details: z.string().min(20, { message: 'Please provide more details (at least 20 characters).' }),
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
  ul: `list-style: none; padding: 0;`,
  li: `margin-bottom: 10px; padding: 10px; background-color: #f9f9f9; border-radius: 4px;`,
  strong: `color: #0a256e;`
};

const EmailTemplate = ({ children }: { children: React.ReactNode }) => `
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

export async function requestQuoteAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = QuoteActionSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: 'Invalid form data. Please check the fields and try again.',
      issues,
      fields: Object.fromEntries(Object.entries(formData).map(([key, value]) => [key, value as string]))
    };
  }

  const { name, email, phone, service, address, details } = parsed.data;

  try {
    // Send email to admin
    const adminEmailHtml = EmailTemplate({
      children: `
        <div style="${emailStyles.card}">
          <h2 style="${emailStyles.h2}">New Quote Request Received</h2>
          <p>A new quote request has been submitted through the website.</p>
        </div>
        <div style="${emailStyles.card}">
          <h2 style="${emailStyles.h2}">Client Details</h2>
          <ul style="${emailStyles.ul}">
            <li style="${emailStyles.li}"><strong style="${emailStyles.strong}">Name:</strong> ${name}</li>
            <li style="${emailStyles.li}"><strong style="${emailStyles.strong}">Email:</strong> ${email}</li>
            <li style="${emailStyles.li}"><strong style="${emailStyles.strong}">Phone:</strong> ${phone || 'Not provided'}</li>
          </ul>
        </div>
        <div style="${emailStyles.card}">
          <h2 style="${emailStyles.h2}">Service Details</h2>
          <ul style="${emailStyles.ul}">
            <li style="${emailStyles.li}"><strong style="${emailStyles.strong}">Service Requested:</strong> ${service}</li>
            <li style="${emailStyles.li}"><strong style="${emailStyles.strong}">Service Address:</strong> ${address || 'Not provided'}</li>
          </ul>
        </div>
        <div style="${emailStyles.card}">
          <h2 style="${emailStyles.h2}">Request Details</h2>
          <p>${details}</p>
        </div>
      `,
    });

    await sendEmail({
      to: 'info@moemoeenterprise.com',
      from: 'orders@moemoeenterprise.com',
      subject: `New Quote Request: ${service}`,
      html: adminEmailHtml,
    });

    // Send confirmation email to the user
    const userEmailHtml = EmailTemplate({
      children: `
        <h1 style="${emailStyles.h1}">Your Quote Request has been Received!</h1>
        <p>Hello ${name},</p>
        <p>Thank you for requesting a quote from MoeMoe Enterprises. We have received your request and our team will review it shortly.</p>
        <p>We appreciate your interest and will get back to you with a personalized quote as soon as possible.</p>
        <p>Best regards,<br/>The MoeMoe Enterprises Team</p>
      `,
    });

    await sendEmail({
      to: email,
      from: 'orders@moemoeenterprise.com',
      subject: 'Your Quote Request has been Received!',
      html: userEmailHtml,
    });

    return {
      message: 'Quote request submitted successfully!',
    };
  } catch (error) {
    console.error('Quote Request Error:', error);
    return {
      message: 'An unexpected error occurred while submitting your request. Please try again later or contact us directly.',
    };
  }
}
