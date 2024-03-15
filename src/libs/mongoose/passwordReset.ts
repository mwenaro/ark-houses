import { dbCon } from "./dbCon";
import { PasswordResetModel } from "./models";

// Create a Password Reset Record
export const createPasswordResetRecord = async (
  email: string,
  token: string
): Promise<void> => {
  try {
    await dbCon();

    const resetRecord = new PasswordResetModel({
      email,
      token,
    });
    return await resetRecord.save();
  } catch (error) {
    throw new Error("Error creating password reset record");
  }
};

// Find Password Reset Records
export const findPasswordResetRecord = async (
  // email: string,
  token: string
): Promise<any | null> => {
  try {
    await dbCon();
    return await PasswordResetModel.findOne({ token, isUsed: false });
  } catch (error) {
    throw new Error("Error finding password reset record");
  }
};

// Update Password Reset Records
export const markPasswordResetRecordAsUsed = async (
  email: string,
  token: string
): Promise<boolean> => {
  try {
    await dbCon();
    await PasswordResetModel.updateOne(
      { email, token },
      { isUsed: true }
    ).exec();
    return true;
  } catch (error) {
    throw new Error("Error marking password reset record as used");
  }
};
