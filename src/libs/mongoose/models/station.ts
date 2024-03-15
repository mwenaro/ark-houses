import * as yup from "yup";
import mongoose, { Model, Schema } from "mongoose";
import { Town } from "./town"; // Import the TownModel


export type Station = {
  _id?: string;
  type?: string;
  name: string;
  town?: Town | string;
  geofenceCoordinates?: string;
  coord: {
    lat: number;
    lng: number;
  };
  description?: string;
  tolerance?: number;
  radius?: number;
  contactNo?: string;
  address?: string;
};

// Yup Validation Schema
const stationSchemaValidation = yup.object().shape({
  _id: yup.string(),
  name: yup.string().required("Name is required"),
  town: yup.string().required("Town is required"),
  type: yup.string(),
  geofenceCoordinates: yup.string(),
  coord: yup.object().shape({
    lat: yup.number().required("Latitude is required"),
    lng: yup.number().required("Longitude is required"),
  }),
  description: yup.string(),
  tolerance: yup.number(),
  radius: yup.number(),
  contactNo: yup.string(),
  address: yup.string(),
});
export const stationSchema = new mongoose.Schema<Station>(
  {
    name: { type: String, required: true },
    type: { type: String, default: "station" },
    geofenceCoordinates: { type: String, default: "" },
    coord: {
      lat: { type: Number, required: true, default: 0 },
      lng: { type: Number, required: true, default: 0 },
    },
    description: { type: String, default: "" },
    tolerance: { type: Number, required: true, default: 0 },
    radius: { type: Number, required: true, default: 30 },
    contactNo: { type: String, default: "" },
    town: { type: Schema.Types.ObjectId, ref: "Town" },

    address: {
      type: String,
      default: "",
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const initialStationValues: Station = {
  type: "",
  town: "", // Set to the default town ID or leave it empty
  name: "",
  coord: {
    lat: 0,
    lng: 0,
  },

  // geofenceCoordinates: '',
  description: "",
  tolerance: 0, // Set to the default tolerance or leave it at 0
  radius: 0, // Set to the default radius or leave it at 0
  contactNo: "",
  address: "",
};

const stationFormFields = [
  // Populate with Towns dynamically
  { name: "name", label: "Name", type: "text", labeled: true },

  {
    name: "type",
    label: "Type",
    type: "text",
    labeled: true,
    options: ["station", "checkpoint"],
  },
  {
    name: "town",
    label: "Town",
    type: "select",
    // options: EAST_AFRICAN_TOWNS.map((c) => c.town),
    options: [{ label: "Select Town", value: "" }],
    labeled: true,
  },
  // { name: "geofenceCoordinates", label: "Geofence Coordinates", type: "text" },
  { name: "coord.lat", type: "number", label: "Latitude", labeled: true },

  { name: "coord.lng", type: "number", label: "Longitude", labeled: true },
  { name: "description", label: "Description", type: "text", labeled: true },
  { name: "contactNo", label: "Contact No", type: "text", labeled: true },
  { name: "address", label: "Address", type: "text", labeled: true },
];

const stationSeedingData1: Station[] = [
  {
    name: "Mombasa",
    coord: { lat: -4.0435, lng: 39.6682 },
    type: "station",
    contactNo: "",
  },
  {
    name: "Nairobi",
    coord: { lat: -1.286389, lng: 36.817223 },
    type: "station",
    contactNo: "",
  },
  {
    name: "Mariakani",
    coord: { lat: -3.822974, lng: 39.427582 },
    type: "checkpoint",
    contactNo: "+254795416380",
  },
  {
    name: "Maungu",
    coord: { lat: -3.561971, lng: 38.756758 },
    contactNo: "+254110081653,+254741187493",
    type: "checkpoint",
  },
  {
    name: "Mtitio",
    coord: { lat: -2.674023, lng: 38.144972 },
    contactNo: "+254707091633",
    type: "checkpoint",
  },
  {
    name: "Kiboko",
    coord: { lat: -2.211228, lng: 37.721626 },
    contactNo: "+254741187494",
    type: "checkpoint",
  },
  {
    name: "Malili",
    coord: { lat: -1.759665, lng: 37.206123 },
    contactNo: "+254742015191",
    type: "checkpoint",
  },
  {
    name: "Makutano",
    coord: { lat: -0.758499, lng: 37.276083 },
    contactNo: "+254110254062",
    type: "checkpoint",
  },
  {
    name: "Gilgil",
    coord: { lat: -0.503588, lng: 36.319839 },
    contactNo: "+254794681028",
    type: "checkpoint",
  },
  {
    name: "Salgaa",
    coord: { lat: -0.20675, lng: 35.849617 },
    contactNo: "+254741187495",
    type: "checkpoint",
  },
  {
    name: "Jua Kali",
    coord: { lat: 0.61056, lng: 35.124951 },
    contactNo: "+254741187496",
    type: "checkpoint",
  },
  {
    name: "Kocholia",
    coord: { lat: 0.618263, lng: 34.339676 },
    contactNo: "+254742015192",
    type: "checkpoint",
  },
  {
    name: "Kipsitet",
    coord: { lat: -0.229466, lng: 35.156325 },
    contactNo: "+254790563004",
    type: "checkpoint",
  },
  {
    name: "Sega",
    coord: { lat: 0.265763, lng: 34.224876 },
    contactNo: "+254110007943",
    type: "checkpoint",
  },
  {
    name: "Musese",
    coord: { lat: 0.7184563, lng: 34.5728143 },
    contactNo: "+254746045075",
    type: "checkpoint",
  },
  {
    name: "Nakalama (Uganda)",
    coord: { lat: 0.628777, lng: 33.528423 },
    contactNo: "+256741269471",
    type: "checkpoint",
  },
  {
    name: "Tororo (Uganda)",
    coord: { lat: 0.659722, lng: 34.165943 },
    contactNo: "+256788968441",
    type: "checkpoint",
  },
];

// statioSedinfData
const stationSeedingData: Station[] = [
  {
    coord: { lat: -0.503588, lng: 36.319839 },
    _id: "65a4e8557a9991cfc6315ca0",
    name: "Gilgil",
    type: "checkpoint",
    contactNo: "+254794681028",
  },
  {
    coord: { lat: 0.61056, lng: 35.124951 },
    _id: "65a4e8557a9991cfc6315ca2",
    name: "Jua Kali",
    type: "checkpoint",
    contactNo: "+254741187496",
  },
  {
    coord: { lat: -2.211228, lng: 37.721626 },
    _id: "65a4e8557a9991cfc6315c9d",
    name: "Kiboko",
    type: "checkpoint",
    contactNo: "+254741187494",
  },
  {
    coord: { lat: -0.229466, lng: 35.156325 },
    _id: "65a4e8557a9991cfc6315ca4",
    name: "Kipsitet",
    type: "checkpoint",
    contactNo: "+254790563004",
  },
  {
    coord: { lat: 0.618263, lng: 34.339676 },
    _id: "65a4e8557a9991cfc6315ca3",
    name: "Kocholia",
    type: "checkpoint",
    contactNo: "+254742015192",
  },
  {
    coord: { lat: -0.758499, lng: 37.276083 },
    _id: "65a4e8557a9991cfc6315c9f",
    name: "Makutano",
    type: "checkpoint",
    contactNo: "+254110254062",
  },
  {
    coord: { lat: -1.759665, lng: 37.206123 },
    _id: "65a4e8557a9991cfc6315c9e",
    name: "Malili",
    type: "checkpoint",
    contactNo: "+254742015191",
  },
  {
    coord: { lat: -3.822974, lng: 39.427582 },
    _id: "65a4e8557a9991cfc6315c9a",
    name: "Mariakani",
    type: "checkpoint",
    contactNo: "+254795416380",
  },
  {
    coord: { lat: -3.561971, lng: 38.756758 },
    _id: "65a4e8557a9991cfc6315c9b",
    name: "Maungu",
    type: "checkpoint",
    contactNo: "+254110081653,+254741187493",
  },
  {
    coord: { lat: -4.0435, lng: 39.6682 },
    _id: "65a4e8557a9991cfc6315c98",
    name: "Mombasa",
    type: "station",
    contactNo: "",
  },
  {
    coord: { lat: -2.674023, lng: 38.144972 },
    _id: "65a4e8557a9991cfc6315c9c",
    name: "Mtitio",
    type: "checkpoint",
    contactNo: "+254707091633",
  },
  {
    coord: { lat: 0.7184563, lng: 34.5728143 },
    _id: "65a4e8557a9991cfc6315ca6",
    name: "Musese",
    type: "checkpoint",
    contactNo: "+254746045075",
  },
  {
    coord: { lat: 1.2921, lng: 36.8219 },
    _id: "65a4e8557a9991cfc6315c99",
    name: "Nairobi",
    type: "station",
    contactNo: "dfd",
  },
  {
    coord: { lat: 0.628777, lng: 33.528423 },
    _id: "65a4e8557a9991cfc6315ca7",
    name: "Nakalama (Uganda)",
    type: "checkpoint",
    contactNo: "+256741269471",
  },
  {
    coord: { lat: -0.20675, lng: 35.849617 },
    _id: "65a4e8557a9991cfc6315ca1",
    name: "Salgaa",
    type: "checkpoint",
    contactNo: "+254741187495",
  },
  {
    coord: { lat: 0.265763, lng: 34.224876 },
    _id: "65a4e8557a9991cfc6315ca5",
    name: "Sega",
    type: "checkpoint",
    contactNo: "+254110007943",
  },
  {
    coord: { lat: 0.659722, lng: 34.165943 },
    _id: "65a4e8557a9991cfc6315ca8",
    name: "Tororo (Uganda)",
    type: "checkpoint",
    contactNo: "+256788968441",
  },
];

const StationModel: Model<Station> =
  mongoose.models?.Station || mongoose.model<Station>("Station", stationSchema);

export {
  stationSchemaValidation,
  stationSeedingData,
  StationModel,
  stationFormFields,
  initialStationValues,
};
