import { dbCon } from "./dbCon";
import { ActivationModel as UserActivationModel, UserModel } from "./models";

// Create a User Action Record
export const createUserActivationRecord = async (
  email: string,
  token: string
): Promise<any> => {
  try {
    await dbCon();

    const activationRecord = new UserActivationModel({
      email,
      token,
    });
    // console.log({activationRecord})
    return await activationRecord.save();
  } catch (error: any) {
    console.log({ error: error.message });
    throw new Error("Error creating user Action record");
  }
};

// Find User Action Records
export const findUserActivationRecord = async (
  // email: string,
  token: string
): Promise<any | null> => {
  try {
    await dbCon();
    return await UserActivationModel.findOne({ token, isUsed: false });
  } catch (error) {
    throw new Error("Error finding user Action record");
  }
};

// Update User Action Records
export const markUserActivationRecordAsUsed = async (
  email: string,
  token: string
): Promise<boolean> => {
  try {
    await dbCon();
    await UserActivationModel.updateOne(
      { email, token },
      { isUsed: true }
    ).exec();
    await UserModel.updateOne(
      { email },
      { activationStatus: true }
    ).exec();
    return true;
  } catch (error) {
    throw new Error("Error marking user Action record as used");
  }
};
