import * as yup from "yup";
import mongoose, { Schema, Model } from "mongoose";
import { EAST_AFRICAN_COUNTRIES } from "@/data/countries";
import { strCapitalize } from "@/utils";

// Define the interface for Town
export interface Town {
  _id?: string;
  name: string;
  shortName: string;
  country: string;
  coord: {
    lat: number;
    lng: number;
  };
  role?: string;
}

// Yup Validation Schema
const townSchemaValidation = yup.object().shape({
  name: yup.string().required("Town Name is required"),
  shortName: yup.string().required("Short Name is required"),
  country: yup.string().required("Country is required"),
  coord: yup.object().shape({
    lat: yup.number().required("Latitude is required"),
    lng: yup.number().required("Longitude is required"),
  }),
});

const townSchema = new Schema<Town>(
  {
    name: { type: String, required: true },
    shortName: { type: String, required: true },
    country: { type: String, required: true },
    coord: {
      lat: { type: Number, default: 0 },
      lng: { type: Number, default: 0 },
    },
    role: {
      type: String,
      enum: ["town", "city", "capital-city"],
      default: "town",
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const initialTownValues = {
  name: "",
  shortName: "", // Renamed from shortForm to shortName
  country: "", // Set to the default country or leave it empty
  coord: { lat: 0, lng: 0 },
  role: "", // Set to the default role or leave it at town
};
// Form Fields for town
const townFormFields = [
  { label: "Town Name", name: "name", type: "text" },
  { label: "Short Name", name: "shortName", type: "text" },
  {
    label: "Country",
    name: "country",
    type: "select",
    options: EAST_AFRICAN_COUNTRIES.map((country) => strCapitalize(country)),
  },
  {
    label: "Role",
    name: "role",
    type: "select",
    options: ["town", "city", "capital-city"],
  },
  { label: "Latitude", name: "coord.lat", type: "text" },
  { label: "Longitude", name: "coord.lng", type: "text" },
];

// Seeding Data
const townSeedingData: Town[] = [
  {
    coord: { lat: 11.1569, lng: 42.712 },
    _id: "65a4cd84549f0922c9b5ac8c",
    name: "Ali Sabieh",
    shortName: "ASB",
    country: "Djibouti",
    role: "town",
  },
  {
    coord: { lat: -3.3869, lng: 36.6822 },
    _id: "65a4cd84549f0922c9b5ac6f",
    name: "Arusha",
    shortName: "ARU",
    country: "Tanzania",
    role: "town",
  },
  {
    coord: { lat: 15.3229, lng: 38.9256 },
    _id: "65a4cd84549f0922c9b5ac86",
    name: "Asmara",
    shortName: "ASM",
    country: "Eritrea",
    role: "town",
  },
  {
    coord: { lat: 13.0092, lng: 42.7386 },
    _id: "65a4cd84549f0922c9b5ac89",
    name: "Assab",
    shortName: "ASB",
    country: "Eritrea",
    role: "town",
  },
  {
    coord: { lat: 3.1209, lng: 43.6522 },
    _id: "65a4cd84549f0922c9b5ac84",
    name: "Baidoa",
    shortName: "BDA",
    country: "Somalia",
    role: "town",
  },
  {
    coord: { lat: 6.207, lng: 31.558 },
    _id: "65a4cd84549f0922c9b5ac7f",
    name: "Bor",
    shortName: "BOR",
    country: "South Sudan",
    role: "town",
  },
  {
    coord: { lat: -3.3818, lng: 29.3644 },
    _id: "65a4cd84549f0922c9b5ac77",
    name: "Bujumbura",
    shortName: "BJM",
    country: "Burundi",
    role: "town",
  },
  {
    coord: { lat: -2.6067, lng: 29.7399 },
    _id: "65a4cd84549f0922c9b5ac74",
    name: "Butare",
    shortName: "BTR",
    country: "Rwanda",
    role: "town",
  },
  {
    coord: { lat: -6.7924, lng: 39.2083 },
    _id: "65a4cd84549f0922c9b5ac6d",
    name: "Dar es Salaam",
    shortName: "DAR",
    country: "Tanzania",
    role: "town",
  },
  {
    coord: { lat: 11.104, lng: 42.3729 },
    _id: "65a4cd84549f0922c9b5ac8f",
    name: "Dikhil",
    shortName: "DKL",
    country: "Djibouti",
    role: "town",
  },
  {
    coord: { lat: 11.589, lng: 43.144 },
    _id: "65a4cd84549f0922c9b5ac8b",
    name: "Djibouti City",
    shortName: "DJI",
    country: "Djibouti",
    role: "town",
  },
  {
    coord: { lat: -6.163, lng: 35.7516 },
    _id: "65a4cd84549f0922c9b5ac6e",
    name: "Dodoma",
    shortName: "DDM",
    country: "Tanzania",
    role: "town",
  },
  {
    coord: { lat: 0.52, lng: 35.2697 },
    _id: "65a4cd84549f0922c9b5ac67",
    name: "Eldoret",
    shortName: "EDL",
    country: "Kenya",
    role: "town",
  },
  {
    coord: { lat: 0.0645, lng: 32.4465 },
    _id: "65a4cd84549f0922c9b5ac69",
    name: "Entebbe",
    shortName: "EBB",
    country: "Uganda",
    role: "town",
  },
  {
    coord: { lat: 8.4051, lng: 48.4842 },
    _id: "65a4cd84549f0922c9b5ac85",
    name: "Garoowe",
    shortName: "GRO",
    country: "Puntland",
    role: "town",
  },
  {
    coord: { lat: -1.6774, lng: 29.2236 },
    _id: "65a4cd84549f0922c9b5ac73",
    name: "Gisenyi",
    shortName: "GSY",
    country: "Rwanda",
    role: "town",
  },
  {
    coord: { lat: -3.4262, lng: 29.9306 },
    _id: "65a4cd84549f0922c9b5ac79",
    name: "Gitega",
    shortName: "GTG",
    country: "Burundi",
    role: "town",
  },
  {
    coord: { lat: 2.7808, lng: 32.299 },
    _id: "65a4cd84549f0922c9b5ac6a",
    name: "Gulu",
    shortName: "GUL",
    country: "Uganda",
    role: "town",
  },
  {
    coord: { lat: 9.5569, lng: 44.0659 },
    _id: "65a4cd84549f0922c9b5ac82",
    name: "Hargeisa",
    shortName: "HGA",
    country: "Somaliland",
    role: "town",
  },
  {
    coord: { lat: 0.4244, lng: 33.2028 },
    _id: "65a4cd84549f0922c9b5ac6b",
    name: "Jinja",
    shortName: "JIN",
    country: "Uganda",
    role: "town",
  },
  {
    coord: { lat: 4.8594, lng: 31.5712 },
    _id: "65a4cd84549f0922c9b5ac7c",
    name: "Juba",
    shortName: "JUB",
    country: "South Sudan",
    role: "town",
  },
  {
    coord: { lat: 0.3136, lng: 32.5811 },
    _id: "65a4cd84549f0922c9b5ac68",
    name: "Kampala",
    shortName: "KLA",
    country: "Uganda",
    role: "town",
  },
  {
    coord: { lat: -2.9228, lng: 29.5623 },
    _id: "65a4cd84549f0922c9b5ac7b",
    name: "Kayanza",
    shortName: "KYN",
    country: "Burundi",
    role: "town",
  },
  {
    coord: { lat: 15.5858, lng: 38.9308 },
    _id: "65a4cd84549f0922c9b5ac87",
    name: "Keren",
    shortName: "KRN",
    country: "Eritrea",
    role: "town",
  },
  {
    coord: { lat: -2.0496, lng: 29.349 },
    _id: "65a4cd84549f0922c9b5ac76",
    name: "Kibuye",
    shortName: "KBY",
    country: "Rwanda",
    role: "town",
  },
  {
    coord: { lat: -1.9436, lng: 30.0594 },
    _id: "65a4cd84549f0922c9b5ac72",
    name: "Kigali",
    shortName: "KGL",
    country: "Rwanda",
    role: "town",
  },
  {
    coord: { lat: -0.3566, lng: 42.5263 },
    _id: "65a4cd84549f0922c9b5ac83",
    name: "Kismayo",
    shortName: "KIS",
    country: "Somalia",
    role: "town",
  },
  {
    coord: { lat: -0.1022, lng: 34.7617 },
    _id: "65a4cd84549f0922c9b5ac65",
    name: "Kisumu",
    shortName: "KIS",
    country: "Kenya",
    role: "town",
  },
  {
    coord: { lat: 9.5369, lng: 31.6536 },
    _id: "65a4cd84549f0922c9b5ac7d",
    name: "Malakal",
    shortName: "MLK",
    country: "South Sudan",
    role: "town",
  },
  {
    coord: { lat: 15.6088, lng: 39.467 },
    _id: "65a4cd84549f0922c9b5ac88",
    name: "Massawa",
    shortName: "MSW",
    country: "Eritrea",
    role: "town",
  },
  {
    coord: { lat: 1.064, lng: 34.1794 },
    _id: "65a4cd84549f0922c9b5ac6c",
    name: "Mbale",
    shortName: "MBL",
    country: "Uganda",
    role: "town",
  },
  {
    coord: { lat: 14.887, lng: 38.8139 },
    _id: "65a4cd84549f0922c9b5ac8a",
    name: "Mendefera",
    shortName: "MDF",
    country: "Eritrea",
    role: "town",
  },
  {
    coord: { lat: 2.0469, lng: 45.3182 },
    _id: "65a4cd84549f0922c9b5ac81",
    name: "Mogadishu",
    shortName: "MOG",
    country: "Somalia",
    role: "town",
  },
  {
    coord: { lat: -4.0435, lng: 39.6682 },
    _id: "65a4cd84549f0922c9b5ac64",
    name: "Mombasa",
    shortName: "MBA",
    country: "Kenya",
    role: "city",
  },
  {
    coord: { lat: -2.5146, lng: 32.909 },
    _id: "65a4cd84549f0922c9b5ac70",
    name: "Mwanza",
    shortName: "MWZ",
    country: "Tanzania",
    role: "town",
  },
  {
    coord: { lat: 1.2921, lng: 36.8219 },
    _id: "65a4cd84549f0922c9b5ac63",
    name: "Nairobi",
    shortName: "NRB",
    country: "Kenya",
    role: "capital-city",
  },
  {
    coord: { lat: -0.3031, lng: 36.08 },
    _id: "65a4cd84549f0922c9b5ac66",
    name: "Nakuru",
    shortName: "NAK",
    country: "Kenya",
    role: "town",
  },
  {
    coord: { lat: -2.912, lng: 29.8324 },
    _id: "65a4cd84549f0922c9b5ac78",
    name: "Ngozi",
    shortName: "NGZ",
    country: "Burundi",
    role: "town",
  },
  {
    coord: { lat: 11.9635, lng: 43.2873 },
    _id: "65a4cd84549f0922c9b5ac8e",
    name: "Obock",
    shortName: "OBK",
    country: "Djibouti",
    role: "town",
  },
  {
    coord: { lat: -1.504, lng: 29.6316 },
    _id: "65a4cd84549f0922c9b5ac75",
    name: "Ruhengeri",
    shortName: "RHI",
    country: "Rwanda",
    role: "town",
  },
  {
    coord: { lat: -3.921, lng: 29.9934 },
    _id: "65a4cd84549f0922c9b5ac7a",
    name: "Rutana",
    shortName: "RTN",
    country: "Burundi",
    role: "town",
  },
  {
    coord: { lat: 11.7932, lng: 42.868 },
    _id: "65a4cd84549f0922c9b5ac8d",
    name: "Tadjoura",
    shortName: "TDJ",
    country: "Djibouti",
    role: "town",
  },
  {
    coord: { lat: 4.4148, lng: 32.5672 },
    _id: "65a4cd84549f0922c9b5ac80",
    name: "Torit",
    shortName: "TOR",
    country: "South Sudan",
    role: "town",
  },
  {
    coord: { lat: 7.711, lng: 27.9833 },
    _id: "65a4cd84549f0922c9b5ac7e",
    name: "Wau",
    shortName: "WAU",
    country: "South Sudan",
    role: "town",
  },
  {
    coord: { lat: -6.1659, lng: 39.1991 },
    _id: "65a4cd84549f0922c9b5ac71",
    name: "Zanzibar City",
    shortName: "ZBC",
    country: "Tanzania",
    role: "town",
  },
];

// Mongoose Model
const TownModel: Model<Town> =
  mongoose.models?.Town || mongoose.model<Town>("Town", townSchema);

export {
  townSchemaValidation,
  TownModel,
  townFormFields,
  initialTownValues,
  townSeedingData,
};
