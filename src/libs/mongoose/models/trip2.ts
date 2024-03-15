import * as yup from "yup";
import mongoose, { Schema, Model } from "mongoose";

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
  agentCode: string;
  destinationStation: string;
  importerTPIN: string;
  rctgCarnetNumber: string;
  yellowCard: string;
  vehicle: string;
  driver: string;
  departureTime?: Date
  arrivalTime?: Date;
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
  departure: yup.date().required("Departure Time is required"),
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
  departureTime: new Date("YYYY-MM-DDTHH:mm:ss"),
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
    agentCode: { type: String, required: true },
    destinationStation: { type: String, required: true },
    importerTPIN: { type: String, required: true },
    rctgCarnetNumber: { type: String, required: true },
    yellowCard: { type: String, required: true },
    vehicle: { type: String, required: true },
    driver: { type: String, required: true },
    departureTime: { type: Date, default: new Date("YYYY-MM-DDTHH:mm:ss") },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

// Mongoose Model for Trip
const TripModel: Model<Trip> =
  mongoose.models?.Trip || mongoose.model<Trip>("Trip", tripSchema);

export { tripSchemaValidation, TripModel, initialTripValues };
