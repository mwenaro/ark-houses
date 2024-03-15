import * as yup from "yup";
import mongoose, { Model, Schema } from "mongoose";
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
  company: yup.string().required("Company is required"),
  plateNumber: yup.string().required("Plate Number is required"),
  description: yup.string(),
  objectAxel: yup.string(),
  manufactureDate: yup.string(),
  purchaseDate: yup.string(),
  tanage: yup.string(),
  chassisNumber: yup.string(),
  engineNumber: yup.string(),
  odometer: yup.string(),
  passengerSeatCount: yup
    .number()
    .required("Passenger Seat Count is required")
    .positive("Passenger Seat Count must be positive")
    .integer("Passenger Seat Count must be an integer"),
});

// Mongoose Schema
export const vehicleSchema = new mongoose.Schema<Vehicle>(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      default: "65a795fe321ec2859ba3d032",
    },
    plateNumber: { type: String, required: true },
    model: { type: String, default: "" },
    type: { type: String, default: "" },
    objectAxel: { type: String },
    manufactureDate: { type: String },
    purchaseDate: { type: String },
    tanage: { type: String },
    chassisNumber: { type: String },
    engineNumber: { type: String },
    odometer: { type: String },
    passengerSeatCount: { type: Number, required: true },
    description: { type: String },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

// Default values for Vehicle
const initialVehicleValues: Vehicle = {
  company: "",
  plateNumber: "",
  tanage: "",
  objectAxel: "",
  manufactureDate: new Date().toISOString().split("T")[0],
  purchaseDate: new Date().toISOString().split("T")[0],
  chassisNumber: "",
  engineNumber: "",
  odometer: "",
  passengerSeatCount: 0,
  description: "",
};

// Seeding Data for Vehicles
const vehicleSeedingData: Vehicle[] = [
  {
    _id: "65aa3309b54b2528a7ef3ffb",
    plateNumber: "ABC123",
    tanage: "trailer",
    objectAxel: "Axel5",
    manufactureDate: "2022-01-01",
    purchaseDate: "2022-01-15",
    chassisNumber: "CH123456",
    engineNumber: "EN789012",
    odometer: "50000",
    passengerSeatCount: 5,
    description: "Vehicle for testing",
    company: "65a795fe321ec2859ba3d032",
  },

  {
    _id: "65aa3309b54b2528a7ef3ffc",
    plateNumber: "BCG123",
    tanage: "canter",
    objectAxel: "Axel1",
    manufactureDate: "2022-01-01",
    purchaseDate: "2022-01-15",
    chassisNumber: "CF123456",
    engineNumber: "EZ789012",
    odometer: "67000",
    passengerSeatCount: 3,
    description: "Dummy Vehicle 2",
    company: "65a795fe321ec2859ba3d032",
  },
  // Add more dummy vehicle objects as needed
];

const vehicleFormFields = [
  { label: "Plate Number", name: "plateNumber", labeled: true, type: "text" },
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
    type: "number",
  },
  {
    label: "Current Company",
    name: "company",
    type: "select",
    options: [{ label: "-- Choose Company --", value: "" }],
    labeled: true,
  },
];

// Mongoose Model for Vehicle
const VehicleModel: Model<Vehicle> =
  mongoose.models?.Vehicle || mongoose.model<Vehicle>("Vehicle", vehicleSchema);

export {
  vehicleSchemaValidation,
  VehicleModel,
  vehicleFormFields,
  initialVehicleValues,
  vehicleSeedingData,
};
