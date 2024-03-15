import * as yup from "yup";
import mongoose, { Schema, Model } from "mongoose";

// Define the interface for NewUser
export interface Newuser {
  _id?: string;
  firstName: string;
  lastName: string;
  otherNames?: string;
  email: string;
  mobile: string;
  currentAddress?: string;
  permanentAddress?: string;
  idNumber: string;
  role: string;
  lastLogin?: Date;
  password?: string;
  drivingLicense?: string;
  dob?: Date;
  maritalStatus?: string;
  photos?: any[];
  registrationStatus?: string;
}

// Yup Validation Schema
const newuserSchemaValidation = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  otherNames: yup.string(),
  email: yup.string().email().required("Email is required"),
  mobile: yup.string().required("Mobile is required"),
  currentAddress: yup.string(),
  permanentAddress: yup.string(),
  idNumber: yup.string().required("ID Number is required"),
  role: yup.string().required("Role is required"),
  lastLogin: yup.date(),
  password: yup.string(),
  drivingLicense: yup.string(),
  dob: yup.date(),
  maritalStatus: yup.string(),
  photos: yup.array(),
  registrationStatus: yup.string(),
});

// Initial values for the NewUser model
const initialNewuserValues: Newuser = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  idNumber: "",
  role: "",
};

const newuserSchema = new Schema<Newuser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    otherNames: { type: String },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    currentAddress: { type: String },
    permanentAddress: { type: String },
    idNumber: { type: String, required: true },
    role: { type: String, required: true },
    lastLogin: { type: Date },
    password: { type: String },
    drivingLicense: { type: String },
    dob: { type: Date },
    maritalStatus: { type: String },
    photos: [{ type: Schema.Types.Mixed }],
    registrationStatus: { type: String },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

// NewUser Form Fields
const newuserFormFields = [
  { label: "First Name", name: "firstName", type: "text", labeled: true },
  { label: "Last Name", name: "lastName", type: "text", labeled: true },
  { label: "Other Names", name: "otherNames", type: "text", labeled: true },
  { label: "Email", name: "email", type: "email", labeled: true },
  { label: "Mobile", name: "mobile", type: "text", labeled: true },
  {
    label: "Current Address",
    name: "currentAddress",
    type: "text",
    labeled: true,
  },
  {
    label: "Permanent Address",
    name: "permanentAddress",
    type: "text",
    labeled: true,
  },
  { label: "ID Number", name: "idNumber", type: "text", labeled: true },
  {
    label: "Role",
    name: "role",
    type: "select",
    labeled: true,
    options: [
      { label: "Super Admin", value: "sa" },
      { label: "Checkpoint Admin", value: "cka" },
      { label: "Checkpoint Operator", value: "cho" },
      { label: "Ctrl Room Operator", value: "ctrlo" },
      { label: "Driver", value: "driver" },
      { label: "user", value: "user" },
    ],
  },
  // { label: "Last Login", name: "lastLogin", type: "date", labeled: true },
  // { label: "Password", name: "password", type: "password", labeled: true },
  // { label: "Driving License", name: "drivingLicense", type: "text", labeled: true },
  // { label: "Date of Birth", name: "dob", type: "date", labeled: true },
  // { label: "Marital Status", name: "maritalStatus", type: "text", labeled: true },
  // { label: "Photos", name: "photos", type: "file", labeled: true },
  // { label: "Registration Status", name: "registrationStatus", type: "text", labeled: true },
];

// NewUser Seed Data
const newUserSeedingData: Newuser[] = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    mobile: "1234567890",
    idNumber: "123456789",
    role: "user",
  },
  // Add more users as needed
];

// Mongoose Model
const NewuserModel: Model<Newuser> =
  mongoose.models?.Newuser || mongoose.model<Newuser>("Newuser", newuserSchema);

export {
  newuserSchemaValidation,
  NewuserModel,
  newuserFormFields,
  initialNewuserValues,
  newUserSeedingData,
};
