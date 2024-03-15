import { sendTestEmail } from "@/libs/nodemailer/gmail";
import { strCapitalize } from "..";
import { BASE_PATH } from "../next_host";

export const handlesendConfirmationEmail = async (
  name: string,
  email: string,
  activationToken: string
) =>
  await sendTestEmail(
    email,
    "Confirmation Email",
    `Drear ${strCapitalize(name)}, \n\n
        Congratulations ! Your account has been successfully created.\n\n
        Go to this link ${BASE_PATH}/auth/activate/${activationToken}/${email}/${name}
        You have 24hrs to activate your account. Hurry up to avoid inconviences.

      Regards,

      Odasasa Admin
      `
  );
