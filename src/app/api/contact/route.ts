import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_LABELS: Record<string, string> = {
  training: 'Training & Coaching',
  consulting: 'Consulting for Automotive Retailers',
  events: 'Events, Brand Experiences & VIP Services',
  general: 'General Inquiry',
};

/** Escapes HTML special characters to prevent HTML injection in email bodies. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Strips CR/LF characters to prevent email header injection. */
function stripHeaderNewlines(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    const {
      name = '',
      email = '',
      company = '',
      service = 'general',
      message = '',
      language = 'en',
      website = '',
    } = body as Record<string, unknown>;

    // Silently accept honeypot bot submissions without sending mail
    if (typeof website === 'string' && website.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const cleanName = typeof name === 'string' ? stripHeaderNewlines(name) : '';
    const cleanEmail = typeof email === 'string' ? stripHeaderNewlines(email) : '';
    const cleanCompany = typeof company === 'string' ? stripHeaderNewlines(company) : '';
    const cleanService = typeof service === 'string' ? service.trim() : 'general';
    const cleanMessage = typeof message === 'string' ? message.trim() : '';
    const cleanLang = language === 'de' ? 'DE' : 'EN';

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(cleanEmail) || cleanEmail.length > 254) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (cleanName.length > 150 || cleanCompany.length > 200 || cleanMessage.length > 5000) {
      return NextResponse.json(
        { error: 'Input exceeds maximum allowed length.' },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPass = process.env.SMTP_PASS?.trim();
    const smtpHost = process.env.SMTP_HOST?.trim() || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpSecure =
      process.env.SMTP_SECURE !== undefined
        ? process.env.SMTP_SECURE === 'true'
        : smtpPort === 465;
    const recipient = process.env.SMTP_TO?.trim() || 'info@mprog.eu';
    const fromAddress = process.env.SMTP_FROM?.trim() || smtpUser;

    if (!smtpUser || !smtpPass || !fromAddress) {
      console.error('Contact API error: SMTP_USER or SMTP_PASS is not configured.');
      return NextResponse.json(
        { error: 'Email service is not configured on the server.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const serviceLabel = SERVICE_LABELS[cleanService] || cleanService || 'General Inquiry';
    const subject = `New Website Inquiry (${serviceLabel}) – ${cleanName}`;

    const textBody = [
      'New contact form submission from mprog.eu',
      '----------------------------------------',
      `Name: ${cleanName}`,
      `Email: ${cleanEmail}`,
      `Company: ${cleanCompany || 'N/A'}`,
      `Area of Interest: ${serviceLabel}`,
      `Website Language: ${cleanLang}`,
      '',
      'Message:',
      cleanMessage,
    ].join('\n');

    const htmlBody = `
      <div style="font-family: Arial, Helvetica, sans-serif; color: #111827; max-width: 640px; line-height: 1.6;">
        <h2 style="margin: 0 0 16px; color: #080D0A; border-bottom: 2px solid #DFCA9E; padding-bottom: 8px;">
          New Website Inquiry
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
          <tr>
            <td style="padding: 6px 12px 6px 0; font-weight: bold; width: 160px;">Name:</td>
            <td style="padding: 6px 0;">${escapeHtml(cleanName)}</td>
          </tr>
          <tr>
            <td style="padding: 6px 12px 6px 0; font-weight: bold;">Email:</td>
            <td style="padding: 6px 0;"><a href="mailto:${escapeHtml(cleanEmail)}">${escapeHtml(cleanEmail)}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 12px 6px 0; font-weight: bold;">Company:</td>
            <td style="padding: 6px 0;">${escapeHtml(cleanCompany || 'N/A')}</td>
          </tr>
          <tr>
            <td style="padding: 6px 12px 6px 0; font-weight: bold;">Area of Interest:</td>
            <td style="padding: 6px 0;">${escapeHtml(serviceLabel)}</td>
          </tr>
          <tr>
            <td style="padding: 6px 12px 6px 0; font-weight: bold;">Language:</td>
            <td style="padding: 6px 0;">${escapeHtml(cleanLang)}</td>
          </tr>
        </table>
        <div style="background: #F9FAFB; border-left: 3px solid #DFCA9E; padding: 12px 16px; white-space: pre-wrap;">${escapeHtml(cleanMessage)}</div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Mobile Product Genius Website" <${fromAddress}>`,
      to: recipient,
      replyTo: cleanEmail,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form email error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
