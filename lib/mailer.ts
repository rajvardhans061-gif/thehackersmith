
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });

interface EnrollmentEmailData {
  name: string;
  email: string;
  contactNumber: string;
  experienceLevel: string;
}

export async function sendEnrollmentEmails(
  data: EnrollmentEmailData
) {
  const from = `"The Hacker Smith" <${process.env.SMTP_FROM}>`;
  const adminEmail = process.env.ADMIN_EMAIL;

  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS ||
    !process.env.SMTP_FROM ||
    !adminEmail
  ) {
    throw new Error("Email configuration is incomplete.");
  }

  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.contactNumber);
  const experience = escapeHtml(data.experienceLevel);

  const applicantEmail = transporter.sendMail({
    from,
    to: data.email,
    replyTo: process.env.SMTP_FROM,
    subject: "We received your inquiry | The Hacker Smith",
    text: `Hello ${data.name},

Thank you for your interest in The Hacker Smith.

We have received your inquiry and will contact you soon.

Regards,
The Hacker Smith Team`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;color:#172033">
        <h2 style="color:#06b6d4">The Hacker Smith</h2>
        <h3>Hello ${name},</h3>
        <p>Thank you for your interest in The Hacker Smith.</p>
        <p>We have successfully received your inquiry. Our team will contact you soon with the next steps.</p>
        <p>Regards,<br><strong>The Hacker Smith Team</strong></p>
        <hr />
        <small>Practical Technology Education</small>
      </div>
    `,
  });

  const adminNotification = transporter.sendMail({
    from,
    to: adminEmail,
    replyTo: data.email,
    subject: "New Enrollment Inquiry | The Hacker Smith",
    text: `New enrollment inquiry

Name: ${data.name}
Email: ${data.email}
Contact: ${data.contactNumber}
Experience: ${data.experienceLevel}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:24px;color:#172033">
        <h2 style="color:#06b6d4">New Enrollment Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${phone}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <hr />
        <small>The Hacker Smith Enrollment System</small>
      </div>
    `,
  });

  return Promise.all([applicantEmail, adminNotification]);
}
