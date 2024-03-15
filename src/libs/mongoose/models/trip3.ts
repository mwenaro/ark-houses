import * as yup from "yup";
import mongoose, { Schema, Model } from "mongoose";
import { TFormField } from "@/types";

// Define the interface for Trip
export interface Trip {
  _id?: string;
  tripType: string;
  bookingNumber: string;
  lockSeal: string;
  sealStamp: string;
  entryNumber: string;
  containerNumber: number;
  containerSize: string;
  originStation: string;
  routeCode: string;
  route?: any;
  agentCode: string;
  destinationStation: string;
  importerTPIN: string;
  rctgCarnetNumber: string;
  yellowCard: string;
  vehicle: string;
  driver: string;
  departure: Date;
}

// Yup Validation Schema for Trip
const tripSchemaValidation = yup.object().shape({
  tripType: yup.string().required("Trip Type is required"),
  bookingNumber: yup.string().required("Booking Number is required"),
  lockSeal: yup.string().required("Lock Seal is required"),
  sealStamp: yup.string().required("Seal Stamp is required"),
  entryNumber: yup.string().required("Entry Number is required"),
  containerNumber: yup.number().required("Container Number is required"),
  containerSize: yup.string().required("Container Size is required"),
  originStation: yup.string().required("Origin Station is required"),
  routeCode: yup.string().required("Route Code is required"),
  agentCode: yup.string().required("Agent Code is required"),
  destinationStation: yup.string().required("Destination Station is required"),
  importerTPIN: yup.string().required("Importer TPIN is required"),
  rctgCarnetNumber: yup.string().required("RCTG Carnet Number is required"),
  yellowCard: yup.string().required("Yellow Card is required"),
  vehicle: yup.string().required("Vehicle is required"),
  driver: yup.string().required("Driver is required"),
  departure: yup.date().required("Departure date is required"),
});

// Initial values for the Trip model
const initialTripValues: Trip = {
  tripType: "",
  bookingNumber: "",
  lockSeal: "",
  sealStamp: "",
  entryNumber: "",
  containerNumber: 0,
  containerSize: "",
  originStation: "",
  routeCode: "",
  agentCode: "",

  destinationStation: "",
  importerTPIN: "",
  rctgCarnetNumber: "",
  yellowCard: "",
  vehicle: "",
  driver: "",
  departure: new Date(),
};

// Mongoose Schema for Trip
const tripSchema = new Schema<Trip>(
  {
    tripType: { type: String, required: true },
    bookingNumber: { type: String, required: true },
    lockSeal: { type: String, required: true },
    sealStamp: { type: String, required: true },
    entryNumber: { type: String, required: true },
    containerNumber: { type: Number, required: true },
    containerSize: { type: String, required: true },
    originStation: { type: String, required: true },
    routeCode: { type: String, required: true },
    route: {
      type: Schema.Types.ObjectId,
      ref: "Route",
    },
    agentCode: { type: String, required: true },
    destinationStation: { type: String, required: true },
    importerTPIN: { type: String, required: true },
    rctgCarnetNumber: { type: String, required: true },
    yellowCard: { type: String, required: true },
    vehicle: { type: String, required: true },
    driver: { type: String, required: true },
    departure: { type: Date, required: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

// Form Fields for Trip
const tripFormFields: any[] = [
  {
    label: "Trip Type",
    name: "tripType",
    type: "select",
    labeled: true,
    options: [
      { label: "-- Choose Type --", value: "" },
      { label: "In Bound", value: "inbound" },
      { label: "OutBound", value: "outbound" },
    ],
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
    type: "number",
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
    options: []
  },
  {
    label: "Route Code",
    name: "routeCode",
    type: "select",
    labeled: true,
    options: [],
  },
  { label: "Agent Code", name: "agentCode", type: "text", labeled: true },
  {
    label: "Destination Station",
    name: "destinationStation",
    type: "select",
    labeled: true,
    options: [],
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
    label: "Vehicle",
    name: "vehicle",
    type: "select",
    labeled: true,
    options: [],
  },
  {
    label: "Driver",
    name: "driver",
    type: "select",
    labeled: true,
    options: [],
  },
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
