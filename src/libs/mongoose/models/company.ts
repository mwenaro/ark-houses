import * as yup from "yup";
import mongoose, { Schema, Model } from "mongoose";
import { EAST_AFRICAN_COUNTRIES } from "@/data/countries";
import { TFormField } from "@/types";

import { Town } from "./town";

// Define the interface for Company
export type Company = {
  _id?: string;
  name: string;
  shortName?: string;
  userName?: string;
  role?: string;
  email: string;
  mobileNumber: string;
  telephoneNumber?: string;
  country: string;
  town: string | Town;
  physicalAddress?: string;
  postalAddress?: string;
  password?: string;
  monthlySmsLimit?: number;
  dailySmsLimit?: number;
  lastLoginTime?: Date;
  userTimeZone?: string;
  status?: boolean;
};

// Yup Validation Schema
const companySchemaValidation = yup.object().shape({
  name: yup.string().required("Company Name is required"),
  physicalAddress: yup.string(),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobileNumber: yup.string().required("Mobile Number is required"),
  telephoneNumber: yup.string(),
  country: yup.string(),
  town: yup.string().required("Town is required"),
});
const companyFormFields = [
  { label: "Company Name", name: "name", type: "text", labeled: true },
  { label: "Email", name: "email", type: "email" },
  { label: "Mobile Number", name: "mobileNumber", type: "text", labeled: true },
  {
    label: "Telephone Number",
    name: "telephoneNumber",
    type: "text",
    labeled: true,
  },
  {
    label: "Country",
    name: "country",
    type: "select",
    labeled: true,
    options: [
      { label: "-- Choose Country -- ", value: "" },
      ...EAST_AFRICAN_COUNTRIES.map((country) => {
        return { label: country, value: country };
      }),
    ],
  },

  {
    label: "Town",
    name: "town",
    type: "select",
    labeled: true,

    options: [{ label: "-- Choose Town -- ", value: "" }],
  },
  {
    label: "Physical Address",
    name: "physicalAddress",
    type: "text",
    labeled: true,
  },
] as TFormField[];

const companySchema = new Schema<Company>(
  {
    name: { type: String, required: true },
    shortName: { type: String, default: "" },
    userName: { type: String },
    role: { type: String, default: "company" },
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    telephoneNumber: { type: String },
    country: { type: String },
    town: { type: Schema.Types.ObjectId, ref: "Town" },
    password: { type: String },
    physicalAddress: { type: String },
    postalAddress: { type: String },
    monthlySmsLimit: { type: Number },
    dailySmsLimit: { type: Number },
    lastLoginTime: { type: Date, default: Date.now },
    status: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const initialCompanyValues: Company = {
  name: "",
  shortName: "",
  userName: "",
  role: "company",
  email: "",
  mobileNumber: "",
  telephoneNumber: "",
  country: "",
  town: "",
  monthlySmsLimit: 0,
  dailySmsLimit: 0,
};

//Company seeding data
const companySeedingData = [
  {
    _id: "65a795fe321ec2859ba3d032",
    name: "Kampuni",
    email: "m@gmail.com",
    country: "Kenya",
    town: "65a4cd84549f0922c9b5ac64",
    physicalAddress: "Mombasa 80100",
    mobileNumber: "07xx345678",
  },
];
// Mongoose Model
const CompanyModel: Model<Company> =
  mongoose.models?.Company || mongoose.model<Company>("Company", companySchema);

export {
  companySchemaValidation,
  initialCompanyValues,
  companySeedingData,
  CompanyModel,
  companyFormFields,
};
