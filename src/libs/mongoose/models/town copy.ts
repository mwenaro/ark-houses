import * as yup from "yup";
import mongoose, { Schema, Model } from "mongoose";
import { EAST_AFRICAN_COUNTRIES } from "@/data/countries";

// Define the interface for Town
export interface Town {
  _id: string;
  name: string;
  shortName: string;
  country: string;
  latitude: number;
  longitude: number;
}

// Yup Validation Schema
const townSchemaValidation = yup.object().shape({
  name: yup.string().required("Town Name is required"),
  shortName: yup.string().required("Short Name is required"),
  country: yup.string().required("Country is required"),
  latitude: yup.number().required("Latitude is required"),
  longitude: yup.number().required("Longitude is required"),
});

const townSchema = new Schema<Town>(
  {
    name: { type: String, required: true },
    shortName: { type: String, required: true },
    country: { type: String, required: true },
    latitude: { type: Number, default: 0 },
    longitude: { type: Number, default: 0 },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const initialTownValues = {
  name: "",
  shortName: "", // Renamed from shortForm to shortName
  country: "", // Set to the default country or leave it empty
  latitude: 0, // Set to the default latitude or leave it at 0
  longitude: 0, // Set to the default longitude or leave it at 0
};

const townFormFields = [
  { label: "Town Name", name: "name", type: "text" },
  { label: "Short Name", name: "shortName", type: "text" },
  {
    label: "Country",
    name: "country",
    type: "select",
    options: EAST_AFRICAN_COUNTRIES,
  },
  { label: "Latitude", name: "latitude", type: "text" },
  { label: "Longitude", name: "longitude", type: "text" },
];

// Mongoose Model
const TownModel: Model<Town> =
  mongoose.models?.Town || mongoose.model<Town>("Town", townSchema);

export { townSchemaValidation, TownModel, townFormFields, initialTownValues };
