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
    await sendEmail({
      to: 'info@moemoeenterprise.com',
      from: 'orders@moemoeenterprise.com',
      subject: `New Quote Request: ${service}`,
      html: `
        <h1>New Quote Request</h1>
        <p>A new quote request has been submitted through the website.</p>
        <h2>Client Details:</h2>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
        </ul>
        <h2>Service Details:</h2>
        <ul>
          <li><strong>Service Requested:</strong> ${service}</li>
          <li><strong>Service Address:</strong> ${address || 'Not provided'}</li>
        </ul>
        <h2>Request Details:</h2>
        <p>${details}</p>
      `,
    });

    // Send confirmation email to the user
    await sendEmail({
      to: email,
      from: 'orders@moemoeenterprise.com',
      subject: 'Your Quote Request has been Received!',
      html: `
        <p>Hello ${name},</p>
        <p>Thank you for requesting a quote from MoeMoe Enterprises. We have received your request and our team will review it shortly.</p>
        <p>We appreciate your interest and will get back to you with a personalized quote as soon as possible.</p>
        <p>Best regards,<br/>The MoeMoe Enterprises Team</p>
      `,
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
