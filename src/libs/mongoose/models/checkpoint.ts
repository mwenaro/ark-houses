import * as yup from "yup";
import mongoose, { Model, Schema } from "mongoose";
import { TownModel } from "./town"; // Import the TownModel
import { EAST_AFRICAN_TOWNS } from "@/data/countries";
import { Check } from "lucide-react";

export type Checkpoint = {
  _id?: string;
  type?: string;
  town?: string; // Use the ID of the Town as a reference
  name: string;
  category?: string;
  geofenceCoordinates?: string;
  lat: number;
  lng: number;
  description?: string;
  tolerance?: number;
  radius?: number;
  contactNo: string;
  address?: string;
};

// Yup Validation Schema
const checkpointSchemaValidation = yup.object().shape({
  // type: yup.string(),
  town: yup.string().required("Town is required"),
  name: yup.string().required("Name is required"),
  // category: yup.string().required("Category is required"),
  // geofenceCoordinates: yup
  //   .string()
  //   .required("Geofence Coordinates are required"),
  description: yup.string().required("Description is required"),
  lat: yup
    .number()
    .typeError("Tolerance must be a number")
    .required("Tolerance is required"),
  lng: yup
    .number()
    .typeError("Tolerance must be a number")
    .required("Tolerance is required"),

  contactNo: yup.string().required("Contact No is required"),
  address: yup.string().required("Address is required"),
});

const checkpointSchema = new mongoose.Schema<Checkpoint>(
  {
    type: { type: String, default: "checkpoint" },
    name: { type: String, required: true },
    // town: { type: Schema.Types.ObjectId, ref: "Town", required: true },
    category: { type: String, default: "" },
    geofenceCoordinates: { type: String, default: "" },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    description: { type: String, default: "" },
    tolerance: { type: Number, required: true, default: 0 },
    radius: { type: Number, required: true, default: 30 },
    contactNo: { type: String, required: true },
    town: { type: Schema.Types.ObjectId, ref: "Town", required: true },

    address: {
      type: String,
      default: "",
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const initialCheckpointValues: Checkpoint = {
  type: "",
  town: "", // Set to the default town ID or leave it empty
  name: "",
  lat: 0,
  lng: 0,
  category: "",
  // geofenceCoordinates: '',
  description: "",
  tolerance: 0, // Set to the default tolerance or leave it at 0
  radius: 0, // Set to the default radius or leave it at 0
  contactNo: "",
  address: "",
};

const checkpointFormFields = [
  // Populate with Towns dynamically
  { name: "name", label: "Name", type: "text", labeled: true },
  // { name: "type", label: "Type", type: "text", labeled: true },
  // { name: "category", label: "Category", type: "text", labeled: true },
  {
    name: "town",
    label: "Town",
    type: "select",

    // options: EAST_AFRICAN_TOWNS.map((c) => c.town),
    options: [{ label: "Select Town", value: "" }],
    labeled: true,
  },
  // { name: "geofenceCoordinates", label: "Geofence Coordinates", type: "text" },
  { name: "lat", type: "number", label: "Latitude", labeled: true },

  { name: "lng", type: "number", label: "Longitude", labeled: true },
  { name: "description", label: "Description", type: "text", labeled: true },
  { name: "contactNo", label: "Contact No", type: "text", labeled: true },
  { name: "address", label: "Address", type: "text", labeled: true },
];

const checkpointSeedingValues: Checkpoint[] = [
  {
    name: "MARIAKANI",
    lat: -3.822974,
    lng: 39.427582,
    contactNo: "+254795416380",
  },
  {
    name: "MAUNGU",
    lat: -3.561971,
    lng: 38.756758,
    contactNo: "+254110081653,+254741187493",
  },
  {
    name: "MTITO",
    lat: -2.674023,
    lng: 38.144972,
    contactNo: "+254707091633",
  },
  {
    name: "KIBOKO",
    lat: -2.211228,
    lng: 37.721626,
    contactNo: "+254741187494",
  },
  {
    name: "MALILI",
    lat: -1.759665,
    lng: 37.206123,
    contactNo: "+254742015191",
  },
  {
    name: "MAKUTANO",
    lat: -0.758499,
    lng: 37.276083,
    contactNo: "+254110254062",
  },
  {
    name: "GILGIL",
    lat: -0.503588,
    lng: 36.319839,
    contactNo: "+254794681028",
  },
  {
    name: "SALGAA",
    lat: -0.20675,
    lng: 35.849617,
    contactNo: "+254741187495",
  },
  {
    name: "JUA KALI",
    lat: 0.61056,
    lng: 35.124951,
    contactNo: "+254741187496",
  },
  {
    name: "KOCHOLIA",
    lat: 0.618263,
    lng: 34.339676,
    contactNo: "+254742015192",
  },
  {
    name: "KIPSITET",
    lat: -0.229466,
    lng: 35.156325,
    contactNo: "+254790563004",
  },
  {
    name: "SEGA",
    lat: 0.265763,
    lng: 34.224876,
    contactNo: "+254110007943",
  },
  {
    name: "MUSESE",
    lat: 0.7184563,
    lng: 34.5728143,
    contactNo: "+254746045075",
  },
  {
    name: "NAKALAMA (UGANDA)",
    lat: 0.628777,
    lng: 33.528423,
    contactNo: "+256741269471",
  },
  {
    name: "TORORO (UGANDA)",
    lat: 0.659722,
    lng: 34.165943,
    contactNo: "+256788968441",
  },
];

const CheckpointModel: Model<Checkpoint> =
  mongoose.models?.Checkpoint ||
  mongoose.model<Checkpoint>("Checkpoint", checkpointSchema);

export {
  checkpointSchemaValidation,
  CheckpointModel,
  checkpointFormFields,
  initialCheckpointValues,
};
