'use server';

import { Resend } from 'resend';
import NewsletterWelcomeEmail from '@/emails/NewsletterWelcomeEmail';

const resendApiKey = process.env.RESEND_MAIL || '';
const resend = new Resend(resendApiKey);

export async function subscribeToNewsletter(email: string) {
  try {
    // Validate email
    if (!email || !email.includes('@')) {
      return { success: false, error: 'Invalid email address' };
    }

    if (!resendApiKey) {
      console.error('RESEND_MAIL environment variable is not set');
      return { success: false, error: 'Email service not configured' };
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID;

    // Add contact to Resend audience if audienceId is provided
    if (audienceId) {
      try {
        await resend.contacts.create({
          email: email,
          unsubscribed: false,
          audienceId: audienceId,
        });
      } catch (contactError) {
        console.error('Resend audience error:', contactError);
        // Continue to send welcome email even if audience add fails
      }
    }

    // Send welcome email using React template
    const { data: emailData, error } = await resend.emails.send({
      from: 'Hestia Site Solutions <noreply@mail.hestiasitesolutions.com>',
      to: [email],
      subject: 'Welcome to Hestia Site Solutions Newsletter',
      react: NewsletterWelcomeEmail({ email }),
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: 'Failed to subscribe to newsletter' };
    }

    // Send admin notification
    await resend.emails.send({
      from: 'Hestia Site Solutions <noreply@mail.hestiasitesolutions.com>',
      to: ['info@hestiasite.com'],
      subject: 'New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Newsletter Subscriber</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subscribed:</strong> ${new Date().toLocaleString('en-US', {
            dateStyle: 'full',
            timeStyle: 'short',
            timeZone: 'America/Chicago'
          })}</p>
        </div>
      `,
    });

    return { success: true, messageId: emailData?.id };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return { success: false, error: 'Internal server error' };
  }
}
