import * as yup from "yup";
import mongoose, { Schema, Model } from "mongoose";
import { TFormField } from "@/types";
import { Company } from "./company";
import { Route } from "./route";
import { Vehicle } from "./vehicle";
import { Driver } from "./driver";

// Define the interface for Trip
export interface Trip {
  _id?: string;
  type: string;
  bookingNumber: string;
  lockSeal: string;
  sealStamp: string;
  company: string | Company;
  entryNumber: string;
  containerNumber: number;
  containerSize: string;
  originStation: string;
  route: string | Route;
  agentCode: string;
  destinationStation: string;
  importerTPIN: string;
  rctgCarnetNumber: string;
  yellowCard: string;
  vehicle: string | Vehicle;
  driver: string | Driver;
  departure?: Date | string;
}

// Yup Validation Schema for Trip
const tripSchemaValidation = yup.object().shape({
  type: yup.string().required("Trip Type is required"),
  bookingNumber: yup.string().required("Booking Number is required"),
  lockSeal: yup.string().required("Lock Seal is required"),
  sealStamp: yup.string().required("Seal Stamp is required"),
  entryNumber: yup.string().required("Entry Number is required"),
  containerNumber: yup.number().required("Container Number is required"),
  containerSize: yup.string().required("Container Size is required"),
  originStation: yup.string().required("Origin Station is required"),
  route: yup.string().required("Route Code is required"),
  agentCode: yup.string().required("Agent Code is required"),
  destinationStation: yup.string().required("Destination Station is required"),
  importerTPIN: yup.string().required("Importer TPIN is required"),
  rctgCarnetNumber: yup.string().required("RCTG Carnet Number is required"),
  yellowCard: yup.string().required("Yellow Card is required"),
  company: yup.string().required("Company is required"),
  vehicle: yup.string().required("Vehicle is required"),
  driver: yup.string().required("Driver is required"),
  departure: yup.date().required("Departure date is required"),
});

// Initial values for the Trip model
const initialTripValues: Trip = {
  type: "",
  bookingNumber: "",
  lockSeal: "",
  sealStamp: "",
  entryNumber: "",
  containerNumber: 0,
  containerSize: "",
  originStation: "",
  route: "",
  agentCode: "",
  company: "",
  destinationStation: "",
  importerTPIN: "",
  rctgCarnetNumber: "",
  yellowCard: "",
  vehicle: "",
  driver: "",
  // departure: new Date().toISOString() ,
};

// Mongoose Schema for Trip
const tripSchema = new Schema<Trip>(
  {
    type: { type: String, required: true },
    bookingNumber: { type: String, required: true },
    lockSeal: { type: String, required: true },
    sealStamp: { type: String, required: true },
    entryNumber: { type: String, required: true },
    containerNumber: { type: Number, required: true },
    containerSize: { type: String, required: true },
    originStation: { type: String, required: true },
    // routeCode: { type: String, required: true },
    route: {
      type: Schema.Types.ObjectId,
      ref: "Route",
    },
    agentCode: { type: String, required: true },
    destinationStation: { type: String, required: true },
    importerTPIN: { type: String, required: true },
    rctgCarnetNumber: { type: String, required: true },
    yellowCard: { type: String, required: true },
    vehicle: { type: Schema.Types.ObjectId, ref: "Vehicle" },
    driver: { type: Schema.Types.ObjectId, ref: "Driver" },
    departure: { type: Date, required: true },

    company: { type: Schema.Types.ObjectId, ref: "Company" },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

// Form Fields for Trip
const tripFormFields: TFormField[] = [
  {
    label: "Trip Type",
    name: "type",
    type: "select",
    labeled: true,
    options: [
      { label: "-- Choose Type --", value: "" },
      { label: "Inbound", value: "inbound" },
      { label: "Outbound", value: "outbound" },
    ],
  },
  {
    label: "Company",
    name: "company",
    type: "select",
    labeled: true,
    options: [{ label: "-- Choose Company --", value: "" }],
  },
  {
    label: "Vehicle",
    name: "vehicle",
    type: "select",
    labeled: true,
    options: [{ label: "-- Choose Vehicle --", value: "" }],
  },
  {
    label: "Driver",
    name: "driver",
    type: "select",
    labeled: true,
    options: [{ label: "-- Choose Driver --", value: "" }],
  },
  {
    label: "Booking Number",
    name: "bookingNumber",
    type: "text",
    labeled: true,
  },
  { label: "Lock Seal", name: "lockSeal", type: "text", labeled: true },
  { label: "Seal Stamp", name: "sealStamp", type: "text", labeled: true },
  { label: "Entry Number", name: "entryNumber", type: "text", labeled: true },
  {
    label: "Container Number",
    name: "containerNumber",
    type: "string",
    labeled: true,
  },
  {
    label: "Container Size",
    name: "containerSize",
    type: "text",
    labeled: true,
  },
  {
    label: "Origin Station",
    name: "originStation",
    type: "select",
    labeled: true,
    options: [{ label: "-- Choose Origin Station --", value: "" }],
  },
  {
    label: "Route",
    name: "route",
    type: "select",
    labeled: true,
    options: [{ label: "-- Choose Station --", value: "" }],
  },
  { label: "Agent Code", name: "agentCode", type: "text", labeled: true },
  {
    label: "Destination Station",
    name: "destinationStation",
    type: "select",
    labeled: true,
    options: [{ label: "-- Choose Destination --", value: "" }],
  },
  { label: "Importer TPIN", name: "importerTPIN", type: "text", labeled: true },
  {
    label: "RCTG Carnet Number",
    name: "rctgCarnetNumber",
    type: "text",
    labeled: true,
  },
  { label: "Yellow Card", name: "yellowCard", type: "text", labeled: true },

  {
    label: "Departure",
    name: "departure",
    type: "datetime-local",
    labeled: true,
  },
];

// Mongoose Model for Trip
const TripModel: Model<Trip> =
  mongoose.models?.Trip || mongoose.model<Trip>("Trip", tripSchema);

export { tripSchemaValidation, TripModel, initialTripValues, tripFormFields };
