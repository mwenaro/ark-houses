import * as yup from "yup";
import mongoose, { Model } from "mongoose";
import { Company } from "./company";

export type Vehicle = {
  _id?: string;
  type?: string;
  model?: string;
  company?: string | Company;
  plateNumber: string;
  objectModel?: string;
  simCardNumber?: string;
  secondarySimNumber?: string;
  imeiNumber?: string;
  objectCategory?: string;
  objectAxel?: string;
  manufactureDate: string;
  purchaseDate: string;
  gpsInstallationDate?: string;
  gpsWarranty?: string;
  chassisNumber?: string;
  engineNumber?: string;
  odometer?: string;
  passengerSeatCount: number;
  tanage: string;
  description?: string;
};

// Yup Validation Schema
const vehicleSchemaValidation = yup.object().shape({
  company: yup.string().required("Name is required"),
  plateNumber: yup.string().required("Plate Number is required"),
  description: yup.string(),

  // objectModel: yup.string().required('Object Model is required'),
  // simCardNumber: yup.string().required('SIM Card Number is required'),
  // secondarySimNumber: yup.string(),
  // imeiNumber: yup.string().required('IMEI Number is required'),
  // objectCategory: yup.string(),

  objectAxel: yup.string(),
  manufactureDate: yup.string(),
  purchaseDate: yup.string(),
  tanage: yup.string(),
  // gpsInstallationDate: yup.string(),
  // gpsWarranty: yup.string(),
  chassisNumber: yup.string(),
  engineNumber: yup.string(),
  odometer: yup.string(),
  passengerSeatCount: yup
    .string()
    .matches(/^\d+$/, "Passenger Seat Count must be a number"),
});

const vehicleSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      default: "65a795fe321ec2859ba3d032",
    },
    plateNumber: { type: String, required: true },
    // objectModel: { type: String },
    // simCardNumber: { type: String, required: true },
    // secondarySimNumber: { type: String },
    // imeiNumber: { type: String, required: true },
    // objectCategory: { type: String },
    model: { type: String, default: "" },
    type: { type: String, default: "" },
    objectAxel: { type: String },
    manufactureDate: { type: String },
    purchaseDate: { type: String },
    tanage: { type: String },
    // gpsInstallationDate: { type: String },
    // gpsWarranty: { type: String },
    chassisNumber: { type: String },
    engineNumber: { type: String },
    odometer: { type: String },
    passengerSeatCount: { type: String },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const vehicleFormFields = [
  { label: "Plate Number", name: "plateNumber", labeled: true, type: "text" },
  // { label: 'Object Model', name: 'objectModel', labeled:true, type: 'text' },
  // { label: 'SIM Card Number', name: 'simCardNumber', labeled:true, type: 'text' },
  // { label: 'Secondary SIM Number', name: 'secondarySimNumber', labeled:true, type: 'text' },
  // { label: 'IMEI Number', name: 'imeiNumber', labeled:true, type: 'text' },
  // { label: 'Object Category', name: 'objectCategory', labeled:true, type: 'text' },
  { label: "Tanage", name: "tanage", labeled: true, type: "text" },
  { label: "Description", name: "description", type: "textarea" },
  { label: "Object Axel", name: "objectAxel", labeled: true, type: "text" },
  {
    label: "Manufacture Date",
    name: "manufactureDate",
    labeled: true,
    type: "date",
  },
  { label: "Purchase Date", name: "purchaseDate", labeled: true, type: "date" },
  // { label: 'GPS Installation Date', name: 'gpsInstallationDate', labeled:true, type: 'text' },
  // { label: 'GPS Warranty', name: 'gpsWarranty', labeled:true, type: 'text' },
  {
    label: "Chassis Number",
    name: "chassisNumber",
    labeled: true,
    type: "text",
  },
  { label: "Engine Number", name: "engineNumber", labeled: true, type: "text" },
  { label: "Odometer", name: "odometer", labeled: true, type: "text" },
  {
    label: "Passenger Seat Count",
    name: "passengerSeatCount",
    labeled: true,
    type: "text",
  },
  {
    label: "Current Company",
    name: "currentCompany",
    type: "select",
    options: [{ label: "-- Choose Company --" }],
    labeled: true,
  },
];

const initialVehicleValues: Vehicle = {
  company: "",
  plateNumber: "",
  // objectModel: '',
  // simCardNumber: '',
  // secondarySimNumber: '',
  // imeiNumber: '',
  // objectCategory: '',
  tanage: "",
  objectAxel: "",
  manufactureDate: new Date().toISOString().split("T")[0],
  purchaseDate: new Date().toISOString().split("T")[0],
  // gpsInstallationDate: '',
  // gpsWarranty: '',
  chassisNumber: "",
  engineNumber: "",
  odometer: "",

  description: "",
  passengerSeatCount: 0,
};

const VehicleModel: Model<Vehicle> =
  mongoose.models?.Vehicle || mongoose.model<Vehicle>("Vehicle", vehicleSchema);

export {
  vehicleSchemaValidation,
  VehicleModel,
  vehicleFormFields,
  initialVehicleValues,
};
