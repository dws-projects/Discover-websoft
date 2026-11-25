const { Resend } = require("resend");

let resendClient;

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("Email not sent -- RESEND_API_KEY is missing");
    return null;
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

async function sendEmail({ to, subject, html, attachments }) {
  const resend = getResendClient();
  if (!resend) return false;

  try {
    const email = {
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to,
      subject,
      html,
    };

    if (attachments?.length) {
      email.attachments = attachments.map((attachment) => ({
        filename: attachment.filename,
        content: attachment.content,
      }));
    }

    const { data, error } = await resend.emails.send(email);
    if (error) {
      console.error("Resend email error:", error);
      return false;
    }

    console.log(`Email sent to ${to} (messageId: ${data?.id || "unknown"})`);
    return true;
  } catch (err) {
    console.error(`Failed to send email to ${to}:`, err.message);
    return false;
  }
}

module.exports = { sendEmail };
