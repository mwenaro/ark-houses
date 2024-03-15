import * as yup from "yup";
import mongoose, { Schema, Model } from "mongoose";

export type Company = {
  _id?: string;
  name: string;
  plateNumber: string;
  objectModel: string;
  simCardNumber: string;
  secondarySimNumber: string;
  imeiNumber: string;
  objectCategory: string;
  objectAxel: string;
  manufactureDate: Date;
  purchaseDate: Date;
  gpsInstallationDate: Date;
  gpsWarranty: string;
  chassisNumber: string;
  engineNumber: string;
  odometer: string;
  passengerSeatCount: string;
  status?: boolean;
};

// Yup Validation Schema
const companySchemaValidation = yup.object().shape({
  name: yup.string().required("Name is required"),
  plateNumber: yup.string().required("Plate Number is required"),
  objectModel: yup.string(),
  simCardNumber: yup.string(),
  secondarySimNumber: yup.string(),
  imeiNumber: yup.string().required("IMEI Number is required"),
  objectCategory: yup.string(),
  objectAxel: yup.string(),
  manufactureDate: yup.string(),
  purchaseDate: yup.string(),
  gpsInstallationDate: yup.string(),
  gpsWarranty: yup.string(),
  chassisNumber: yup.string(),
  engineNumber: yup.string(),
  odometer: yup.string(),
  passengerSeatCount: yup.string(),
});

// Mongoose Schema

const companySchema = new Schema<Company>(
  {
    name: { type: String, required: true },
    plateNumber: { type: String, required: true },
    objectModel: { type: String },
    simCardNumber: { type: String },
    secondarySimNumber: { type: String },
    imeiNumber: { type: String, required: true },
    objectCategory: { type: String },
    objectAxel: { type: String },
    manufactureDate: { type: Date },
    purchaseDate: { type: Date },
    gpsInstallationDate: { type: Date },
    gpsWarranty: { type: String },
    chassisNumber: { type: String },
    engineNumber: { type: String },
    odometer: { type: String },
    passengerSeatCount: { type: String },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

// Mongoose Model

const CompanyModel: Model<Company> =
  mongoose.models?.Company || mongoose.model<Company>("Company", companySchema);

// Array of objects for form fields
const companyFormFields = [
  { type: "text", label: "Name*", name: "name" },
  { type: "text", label: "Plate Number*", name: "plateNumber" },
  { type: "text", label: "Object Model", name: "objectModel" },
  { type: "text", label: "Sim Card Number", name: "simCardNumber" },
  { type: "text", label: "Secondary Sim Number", name: "secondarySimNumber" },
  { type: "text", label: "IMEI Number*", name: "imeiNumber" },
  { type: "text", label: "Object Category", name: "objectCategory" },
  { type: "text", label: "Object Axel", name: "objectAxel" },
  {
    type: "date",
    label: "Manufacture Date (YYYY-MM-DD)",
    name: "manufactureDate",
  },
  { type: "date", label: "Purchase Date (YYYY-MM-DD)", name: "purchaseDate" },
  {
    type: "date",
    label: "GPS Installation Date (YYYY-MM-DD)",
    name: "gpsInstallationDate",
  },
  { type: "text", label: "GPS Warranty", name: "gpsWarranty" },
  { type: "text", label: "VIN (Chassis Number)", name: "chassisNumber" },
  { type: "text", label: "Engine Number", name: "engineNumber" },
  { type: "text", label: "Odometer", name: "odometer" },
  { type: "text", label: "No. of Passenger Seat", name: "passengerSeatCount" },
];

// export { companySchemaValidation, CompanyModel, companyFormFields };
