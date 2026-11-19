const nodemailer = require("nodemailer");

let transporter;

function getTransporter() {
  if (transporter) return transporter;

  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT || 465);
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASSWORD || process.env.EMAIL_APP_PASSWORD;

  if (!host || !user || !pass) {
    console.warn(
      "Email not sent -- EMAIL_HOST, EMAIL_USER, and EMAIL_PASSWORD are required"
    );
    return null;
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.EMAIL_SECURE
      ? process.env.EMAIL_SECURE === "true"
      : port === 465,
    auth: { user, pass },
  });

  return transporter;
}

async function sendEmail({ to, subject, html, attachments }) {
  const mailer = getTransporter();
  if (!mailer) return false;

  try {
    const info = await mailer.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to,
      subject,
      html,
      attachments: attachments?.map((attachment) => ({
        filename: attachment.filename,
        content: attachment.content,
      })),
    });

    console.log(`Email sent to ${to} (messageId: ${info.messageId})`);
    return true;
  } catch (err) {
    console.error(`Failed to send email to ${to}:`, err.message);
    return false;
  }
}

module.exports = { sendEmail };
