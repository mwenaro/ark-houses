import * as yup from "yup";
import mongoose, { Document, Schema, model, Model } from "mongoose";

// Define the interface for Stakeholder
export type StakeHolder = {
  _id: string;
  stakeholderName: string;
  shortName: string;
  userName: string;
  application: string;
  userGroup: string;
  email: string;
  mobileNumber: string;
  telephoneNumber: string;
  country: string;
  state: string;
  city: string;
  monthlySmsLimit: number;
  dailySmsLimit: number;
  lastLoginTime: Date;
  userTimeZone: string;
  createdDate: Date;
  status?: boolean;
};

// Yup Validation Schema
const stakeHolderSchemaValidation = yup.object().shape({
  stakeHolderName: yup.string().required("Stakeholder Name is required"),
  shortName: yup.string().required("Short Name is required"),
  userName: yup.string().required("User Name is required"),
  application: yup.string().required("Application is required"),
  userGroup: yup.string().required("User Group is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobileNumber: yup.string().required("Mobile Number is required"),
  telephoneNumber: yup.string(),
  country: yup.string(),
  state: yup.string(),
  city: yup.string(),
  monthlySmsLimit: yup
    .number()
    .positive("Monthly SMS Limit must be a positive number"),
  dailySmsLimit: yup
    .number()
    .positive("Daily SMS Limit must be a positive number"),
  lastLoginTime: yup.date(),
  userTimeZone: yup.string(),
  createdDate: yup.date(),
});

const stakeHolderSchema = new Schema<StakeHolder>(
  {
    stakeholderName: { type: String, required: true },
    shortName: { type: String, required: true },
    userName: { type: String, required: true },
    application: { type: String, required: true },
    userGroup: { type: String, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    telephoneNumber: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    monthlySmsLimit: { type: Number },
    dailySmsLimit: { type: Number },
    lastLoginTime: { type: Date },
    userTimeZone: { type: String },
    createdDate: { type: Date },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

// Mongoose Model
const StakeHolderModel: Model<StakeHolder> =
  mongoose.models?.StakeHolder || model("StakeHolder", stakeHolderSchema);

export { stakeHolderSchemaValidation, StakeHolderModel };
