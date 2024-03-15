import * as yup from "yup";
import mongoose, { Model, Schema } from "mongoose";
import { Town } from "./town";
import { Company } from "./company";
import { EAST_AFRICAN_COUNTRIES } from "@/data/countries";

// Define the Driver type
export type Driver = {
  _id?: string;
  firstName: string;
  lastName: string;
  otherName?: string;
  driverNumber: string;
  country: string;
  town: string | Town;
  contactNumber: string;
  email: string;
  password: string;
  status?: boolean;
  companies?: string[];
  company?: string | Company;
};

// Yup Validation Schema for Driver
const driverSchemaValidation = yup.object().shape({
  _id: yup.string(),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  otherName: yup.string(),
  driverNumber: yup.string().required("Driver number is required"),
  country: yup.string().required("Country is required"),
  town: yup.string().required("Town is required"),
  contactNumber: yup.string().required("Contact number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  //   password: yup.string().required("Password is required"),
  status: yup.boolean(),
  company: yup.string(),
  companies: yup.array().of(yup.string()),
});

// Mongoose Schema for Driver
export const driverSchema = new mongoose.Schema<Driver>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    otherName: { type: String },
    driverNumber: { type: String, required: true },
    country: { type: String, required: true },
    town: { type: Schema.Types.ObjectId, ref: "Town", required: true },

    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: Boolean },
    companies: { type: [{ type: Schema.Types.ObjectId, ref: "Company" }] },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      default: "65a795fe321ec2859ba3d032",
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

// Default values for Driver
const initialDriverValues: Driver = {
  firstName: "",
  lastName: "",
  otherName: "",
  driverNumber: "",
  country: "",
  town: "",
  contactNumber: "",
  email: "",
  company: "",
  password: "password",
};

const driverSeedingData: Driver[] = [
  {
    _id:"65aa347529565baa168fb5d9",
    firstName: "John",
    lastName: "Doe",
    otherName: "Middle",
    driverNumber: "DR123456",
    country: "Kenya",
    town: "Mombasa",
    contactNumber: "+1234567890",
    email: "john.doe@example.com",
    password: "password",
    status: true,
  },
  {
    _id:"65aa347529565baa168fb5da",
    firstName: "Jane",
    lastName: "Smith",
    driverNumber: "DR789012",
    country: "Uganda",
    town: "Jinja",
    contactNumber: "+9876543210",
    email: "jane.smith@example.com",
    password: "password",
    status: false,
  },
  // Add more dummy driver objects as needed
];

const driverFormFields = [
  { name: "firstName", label: "First Name", type: "text", labeled: true },
  { name: "lastName", label: "Last Name", type: "text", labeled: true },
  { name: "otherName", label: "Other Name", type: "text", labeled: true },
  { name: "driverNumber", label: "Driver Number", type: "text", labeled: true },
  {
    name: "country",
    label: "Country",
    type: "select",
    labeled: true,
    options: [
      { label: "-- Choose Country --", value: "" },
      ...EAST_AFRICAN_COUNTRIES.map((country) => {
        return { label: country, value: country };
      }),
    ],
  },
  {
    name: "town",
    label: "Town",
    type: "select",
    labeled: true,
    options: [{ label: "-- Choose Town --", value: "" }],
  },
  {
    name: "contactNumber",
    label: "Contact Number",
    type: "text",
    labeled: true,
  },
  { name: "email", label: "Email", type: "text", labeled: true },
  // { name: "password", label: "Password", type: "password", labeled: true },
  { name: "status", label: "Status", type: "checkbox", labeled: true },
  {
    name: "company",
    label: "Current Company",
    type: "select",
    labeled: true,
    options: [{ label: "-- Choose Company --", value: "" }],
  },
  // { name: "companies", label: "Companies", type: "text", labeled: true },
];

// Export Mongoose Model for Driver
const DriverModel: Model<Driver> =
  mongoose.models?.Driver || mongoose.model<Driver>("Driver", driverSchema);

export {
  driverSchemaValidation,
  DriverModel,
  initialDriverValues,
  driverSeedingData,
  driverFormFields,
};
