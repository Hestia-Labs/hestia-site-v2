'use server';

import { Resend } from 'resend';
import ContactFormEmail from '@/emails/ContactFormEmail';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  location: string;
  timeline: string;
  squareFootage: string;
  details: string;
}

const resendApiKey = process.env.RESEND_MAIL || '';
const resend = new Resend(resendApiKey);

export async function submitContactForm(data: ContactFormData) {
  try {
    const { fullName, email, phone, company, projectType, location, timeline, squareFootage, details } = data;

    // Validate required fields
    if (!fullName || !email || !phone) {
      return { success: false, error: 'Missing required fields' };
    }

    if (!resendApiKey) {
      console.error('RESEND_MAIL environment variable is not set');
      return { success: false, error: 'Email service not configured' };
    }

    // Send email using Resend SDK with React template
    const { data: emailData, error } = await resend.emails.send({
      from: 'Hestia Site Solutions <noreply@mail.hestiasitesolutions.com>',
      to: ['info@hestiasite.com'],
      replyTo: email,
      subject: `New Contact Form Submission - ${projectType || 'General Inquiry'}`,
      react: ContactFormEmail({
        fullName,
        email,
        phone,
        company,
        projectType,
        location,
        timeline,
        squareFootage,
        details,
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: 'Failed to send email' };
    }

    return { success: true, messageId: emailData?.id };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, error: 'Internal server error' };
  }
}
