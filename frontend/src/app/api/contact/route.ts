import { NextRequest, NextResponse } from 'next/server';

/**
 * Contact form API endpoint
 * 
 * To enable email sending, configure one of these options:
 * 
 * 1. NodeMailer (Gmail/SMTP):
 *    - Install: npm install nodemailer
 *    - Set env: EMAIL_USER and EMAIL_PASSWORD
 * 
 * 2. Resend (https://resend.com):
 *    - Install: npm install resend
 *    - Set env: RESEND_API_KEY
 * 
 * 3. SendGrid:
 *    - Install: npm install @sendgrid/mail
 *    - Set env: SENDGRID_API_KEY
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the contact message (for now)
    console.log('📧 New contact form submission:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    /**
     * TODO: Uncomment and configure one of the email services below
     * 
     * OPTION 1: Using Resend
     * 
     * import { Resend } from 'resend';
     * const resend = new Resend(process.env.RESEND_API_KEY);
     * 
     * await resend.emails.send({
     *   from: 'noreply@yourdomain.com',
     *   to: 'admizero66@gmail.com',
     *   replyTo: email,
     *   subject: `New Contact Form Submission from ${name}`,
     *   html: `...`,
     * });
     * 
     * OPTION 2: Using SendGrid
     * 
     * import { default as sgMail } from '@sendgrid/mail';
     * sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
     * 
     * await sgMail.send({
     *   from: 'noreply@yourdomain.com',
     *   to: 'admizero66@gmail.com',
     *   replyTo: email,
     *   subject: `New Contact Form Submission from ${name}`,
     *   html: `...`,
     * });
     */

    return NextResponse.json(
      { message: 'Thank you! Your message was received.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process your message' },
      { status: 500 }
    );
  }
}

