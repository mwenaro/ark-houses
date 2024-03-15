import { sendTestEmail } from "@/libs/nodemailer/gmail";
import { BASE_PATH } from "../next_host";

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const from = "your_email@gmail.com", // Sender's email address
    to = email, // Recipient's email address
    subject = "Password Reset",
    body = `<html><head><title>Password Reset</title></head><body>
    To reset your password, click the following link:<a href="${BASE_PATH}/auth/password-reset/${token}">${BASE_PATH}/auth/password-reset/${token}</a>
    </body></html>`;

  try {
    await sendTestEmail(to, subject, body, true);

    return true;
  } catch (error) {
    return false;
  }
};
