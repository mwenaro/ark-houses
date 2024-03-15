import * as yup from "yup";
import mongoose, { Schema, Model } from "mongoose";
// import { EAST_AFRICAN_TOWNS } from "@/data/countries";
import { Station } from "./station";

// Define the interface for Route
export interface Route {
  _id?: string;
  name: string;
  code: string;
  startPoint: Station | string;
  endPoint: Station | string;
  stations: (Station | string)[];
  distance?: any
}

// Yup Validation Schema
const routeSchemaValidation = yup.object().shape({
  name: yup.string().required("Route Name is required"),
  code: yup.string().required("Code is required"),
  startPoint: yup.string().required("Start Point is required"),
  endPoint: yup.string().required("End Point is required"),
  stations: yup
    .array()
    .min(1, " Select atleast 1 station")
    .required("Select atleast 1 station"),
});

// Initial values for the Route model
const initialRouteValues: Route = {
  name: "",
  code: "",
  startPoint: "",
  endPoint: "",
  stations: [],
  distance: "",
};

const routeSchema = new Schema<Route>(
  {
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    startPoint: { type: Schema.Types.ObjectId, ref: "Station", required: true },
    endPoint: { type: Schema.Types.ObjectId, ref: "Station", required: true },
distance: { type: Schema.Types.Mixed, default: "" },
    stations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Station" }],
    
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const routeFormFields = [
  { label: "Route Name", name: "name", type: "text", labeled: true },

  { label: "Route Code", name: "code", type: "text", labeled: true },
  {
    label: "Start Point",
    name: "startPoint",
    type: "select",
    options: [{ label: "-- Choose Start Point --", value: "" }],
    labeled: true,
  },
  {
    label: "End Point",
    name: "endPoint",
    type: "select",
    options: [{ label: "-- Choose End Point --", value: "" }],
    labeled: true,
  },
  {
    label: "Stations",
    name: "stations",
    type: "checkbox",
    labeled: true,
    options: [
      { label: "stat1", value: "val1" },
      { label: "stat3", value: "val3" },
    ],
  },
];

// Route Seedind data
const routeSeedingData1 = [
  {
    name: "CP1 Msa-nbi",

    code: "CP1",
    startPoint: "Msa",
    endPoint: "Nbi",
    stations: "Mariakani, Maungu, Mutito, Kiboko, Makutano, Nairobi",
  },
  {
    name: "CP2 Nbi-Msa",

    code: "CP2",
    startPoint: "Nbi",
    endPoint: "Msa",
    stations: "Makutano, Kiboko, Mutito, Maungu, Mariakani",
  },
  {
    name: "CP3 Msa-Malaba-Kampala",

    code: "CP3",
    startPoint: "Msa",
    endPoint: "Kampala",
    stations:
      "Mariakani, Maungu, Mutito, Kiboko, Makutano, Gilgil, Salga, Jua Kali, Kocholia, Kipsitet, Malaba, Nakalama, Tororo",
  },
  {
    name: "CP4 Kampala-Malaba-Msa",

    code: "CP4",
    startPoint: "Kampala",
    endPoint: "Msa",
    stations:
      "Tororo, Nakalama, Malaba, Kipsitet, Kocholia, Jua Kali, Salaga, Gilgil, Makutano, Kiboko, Mutito, Maungu, Mariakani",
  },
  {
    name: "CP5 Msa-Busia-Kampala",

    code: "CP5",
    startPoint: "Msa",
    endPoint: "Kampala",
    stations:
      "Mariakani, Maungu, Mutito, Kiboko, Makutano, Gilgil, Sega, Busia, Musese, Nakalama, Tororo",
  },
  {
    name: "CP6 Kampala-Busia-Msa",

    code: "CP6",
    startPoint: "Kampala",
    endPoint: "Msa",
    stations:
      "Tororo, Nakalama, Musese, Busia, Sega, Gilgil, Makutano, Kiboko, Mutito, Maungu, Mariakani, Msa",
  },
];

const routeSeedingData2: Route[] = [
  {
    name: "Msa-nbi",
    code: "ROUTE1",
    startPoint: "65a4e8557a9991cfc6315c98", // Mombasa
    endPoint: "65a4e8557a9991cfc6315c99", // Nairobi
    stations: [
      "65a4e8557a9991cfc6315c9a", // Mariakani
      "65a4e8557a9991cfc6315c9b", // Maungu
      "65a4e8557a9991cfc6315c9c", // Mutito
      "65a4e8557a9991cfc6315c9d", // Kiboko
      "65a4e8557a9991cfc6315c9f", // Makutano
    ],
  },
  {
    name: "Nbi-Msa",
    code: "ROUTE2",
    startPoint: "65a4e8557a9991cfc6315c99", // Nairobi
    endPoint: "65a4e8557a9991cfc6315c98", // Mombasa
    stations: [
      "65a4e8557a9991cfc6315c9f", // Makutano
      "65a4e8557a9991cfc6315c9d", // Kiboko
      "65a4e8557a9991cfc6315c9c", // Mutito
      "65a4e8557a9991cfc6315c9b", // Maungu
      "65a4e8557a9991cfc6315c9a", // Mariakani
    ],
  },
  {
    name: "Msa-Malaba-Kampala",
    code: "ROUTE3",
    startPoint: "65a4e8557a9991cfc6315c98", // Mombasa
    endPoint: "65a4e8557a9991cfc6315ca6", // Kampala
    stations: [
      "65a4e8557a9991cfc6315c9a", // Mariakani
      "65a4e8557a9991cfc6315c9b", // Maungu
      "65a4e8557a9991cfc6315c9c", // Mutito
      "65a4e8557a9991cfc6315c9d", // Kiboko
      "65a4e8557a9991cfc6315c9f", // Makutano
      "65a4e8557a9991cfc6315ca0", // Gilgil
      "65a4e8557a9991cfc6315ca1", // Salgaa
      "65a4e8557a9991cfc6315ca3", // Jua Kali
      "65a4e8557a9991cfc6315ca5", // Kocholia
      "65a4e8557a9991cfc6315ca4", // Kipsitet
      "65a4e8557a9991cfc6315c9e", // Malili
      "65a4e8557a9991cfc6315ca7", // Nakalama
      "65a4e8557a9991cfc6315ca8", // Tororo
    ],
  },
  {
    name: "Kampala-Malaba-Msa",
    code: "ROUTE4",
    startPoint: "65a4e8557a9991cfc6315ca6", // Kampala
    endPoint: "65a4e8557a9991cfc6315c98", // Mombasa
    stations: [
      "65a4e8557a9991cfc6315ca8", // Tororo
      "65a4e8557a9991cfc6315ca7", // Nakalama
      "65a4e8557a9991cfc6315c9e", // Malili
      "65a4e8557a9991cfc6315ca4", // Kipsitet
      "65a4e8557a9991cfc6315ca5", // Kocholia
      "65a4e8557a9991cfc6315ca3", // Jua Kali
      "65a4e8557a9991cfc6315ca1", // Salgaa
      "65a4e8557a9991cfc6315ca0", // Gilgil
      "65a4e8557a9991cfc6315c9f", // Makutano
      "65a4e8557a9991cfc6315c9d", // Kiboko
      "65a4e8557a9991cfc6315c9c", // Mutito
      "65a4e8557a9991cfc6315c9b", // Maungu
      "65a4e8557a9991cfc6315c9a", // Mariakani
    ],
  },
  {
    name: "Msa-Busia-Kampala",
    code: "ROUTE5",
    startPoint: "65a4e8557a9991cfc6315c98", // Mombasa
    endPoint: "65a4e8557a9991cfc6315ca6", // Kampala
    stations: [
      "65a4e8557a9991cfc6315c9a", // Mariakani
      "65a4e8557a9991cfc6315c9b", // Maungu
      "65a4e8557a9991cfc6315c9c", // Mutito
      "65a4e8557a9991cfc6315c9d", // Kiboko
      "65a4e8557a9991cfc6315c9f", // Makutano
      "65a4e8557a9991cfc6315ca0", // Gilgil
      "65a4e8557a9991cfc6315ca5", // Kocholia
      "65a4e8557a9991cfc6315ca6", // Sega
      "65a4e8557a9991cfc6315ca7", // Busia
      "65a4e8557a9991cfc6315ca8", // Musese
      "65a4e8557a9991cfc6315ca1", // Nakalama
      "65a4e8557a9991cfc6315ca8", // Tororo
    ],
  },
  {
    name: "Kampala-Busia-Msa",
    code: "ROUTE6",
    startPoint: "65a4e8557a9991cfc6315ca6", // Kampala
    endPoint: "65a4e8557a9991cfc6315c98", // Mombasa
    stations: [
      "65a4e8557a9991cfc6315ca8", // Tororo
      "65a4e8557a9991cfc6315ca1", // Nakalama
      "65a4e8557a9991cfc6315ca7", // Musese
      "65a4e8557a9991cfc6315ca6", // Busia
      "65a4e8557a9991cfc6315ca5", // Sega
      "65a4e8557a9991cfc6315ca0", // Gilgil
      "65a4e8557a9991cfc6315c9f", // Makutano
      "65a4e8557a9991cfc6315c9d", // Kiboko
      "65a4e8557a9991cfc6315c9c", // Mutito
      "65a4e8557a9991cfc6315c9b", // Maungu
      "65a4e8557a9991cfc6315c9a", // Mariakani
    ],
  },
];

const routeSeedingData: Route[] = [
  {
    _id: "65a506c35e1938952f9c42c4",
    name: "Msa-nbi",
    code: "ROUTE1",
    startPoint: "65a4e8557a9991cfc6315c98",
    endPoint: "65a4e8557a9991cfc6315c99",
    stations: [
      "65a4e8557a9991cfc6315c9a",
      "65a4e8557a9991cfc6315c9b",
      "65a4e8557a9991cfc6315c9c",
      "65a4e8557a9991cfc6315c9d",
      "65a4e8557a9991cfc6315c9f",
    ],
  },
  {
    _id: "65a506c35e1938952f9c42c5",
    name: "Nbi-Msa",
    code: "ROUTE2",
    startPoint: "65a4e8557a9991cfc6315c99",
    endPoint: "65a4e8557a9991cfc6315c98",
    stations: [
      "65a4e8557a9991cfc6315c9f",
      "65a4e8557a9991cfc6315c9d",
      "65a4e8557a9991cfc6315c9c",
      "65a4e8557a9991cfc6315c9b",
      "65a4e8557a9991cfc6315c9a",
    ],
  },
  {
    _id: "65a506c35e1938952f9c42c6",
    name: "Msa-Malaba-Kampala",
    code: "ROUTE3",
    startPoint: "65a4e8557a9991cfc6315c98",
    endPoint: "65a4e8557a9991cfc6315ca6",
    stations: [
      "65a4e8557a9991cfc6315c9a",
      "65a4e8557a9991cfc6315c9b",
      "65a4e8557a9991cfc6315c9c",
      "65a4e8557a9991cfc6315c9d",
      "65a4e8557a9991cfc6315c9f",
      "65a4e8557a9991cfc6315ca0",
      "65a4e8557a9991cfc6315ca1",
      "65a4e8557a9991cfc6315ca3",
      "65a4e8557a9991cfc6315ca5",
      "65a4e8557a9991cfc6315ca4",
      "65a4e8557a9991cfc6315c9e",
      "65a4e8557a9991cfc6315ca7",
      "65a4e8557a9991cfc6315ca8",
    ],
  },
  {
    _id: "65a506c35e1938952f9c42c7",
    name: "Kampala-Malaba-Msa",
    code: "ROUTE4",
    startPoint: "65a4e8557a9991cfc6315ca6",
    endPoint: "65a4e8557a9991cfc6315c98",
    stations: [
      "65a4e8557a9991cfc6315ca8",
      "65a4e8557a9991cfc6315ca7",
      "65a4e8557a9991cfc6315c9e",
      "65a4e8557a9991cfc6315ca4",
      "65a4e8557a9991cfc6315ca5",
      "65a4e8557a9991cfc6315ca3",
      "65a4e8557a9991cfc6315ca1",
      "65a4e8557a9991cfc6315ca0",
      "65a4e8557a9991cfc6315c9f",
      "65a4e8557a9991cfc6315c9d",
      "65a4e8557a9991cfc6315c9c",
      "65a4e8557a9991cfc6315c9b",
      "65a4e8557a9991cfc6315c9a",
    ],
  },
  {
    _id: "65a506c35e1938952f9c42c8",
    name: "Msa-Busia-Kampala",
    code: "ROUTE5",
    startPoint: "65a4e8557a9991cfc6315c98",
    endPoint: "65a4e8557a9991cfc6315ca6",
    stations: [
      "65a4e8557a9991cfc6315c9a",
      "65a4e8557a9991cfc6315c9b",
      "65a4e8557a9991cfc6315c9c",
      "65a4e8557a9991cfc6315c9d",
      "65a4e8557a9991cfc6315c9f",
      "65a4e8557a9991cfc6315ca0",
      "65a4e8557a9991cfc6315ca5",
      "65a4e8557a9991cfc6315ca6",
      "65a4e8557a9991cfc6315ca7",
      "65a4e8557a9991cfc6315ca8",
      "65a4e8557a9991cfc6315ca1",
      "65a4e8557a9991cfc6315ca8",
    ],
  },
  {
    _id: "65a506c35e1938952f9c42c9",
    name: "Kampala-Busia-Msa",
    code: "ROUTE6",
    startPoint: "65a4e8557a9991cfc6315ca6",
    endPoint: "65a4e8557a9991cfc6315c98",
    stations: [
      "65a4e8557a9991cfc6315ca8",
      "65a4e8557a9991cfc6315ca1",
      "65a4e8557a9991cfc6315ca7",
      "65a4e8557a9991cfc6315ca6",
      "65a4e8557a9991cfc6315ca5",
      "65a4e8557a9991cfc6315ca0",
      "65a4e8557a9991cfc6315c9f",
      "65a4e8557a9991cfc6315c9d",
      "65a4e8557a9991cfc6315c9c",
      "65a4e8557a9991cfc6315c9b",
      "65a4e8557a9991cfc6315c9a",
    ],
  },
];
// Mongoose Model
const RouteModel: Model<Route> =
  mongoose.models?.Route || mongoose.model<Route>("Route", routeSchema);

export {
  routeSchemaValidation,
  RouteModel,
  routeFormFields,
  initialRouteValues,
  routeSeedingData,
};
