import mongoose, { Schema, Model } from "mongoose";

export type Driver = {
  _id?: string;
  firstName: string;
  lastName: string;
  otherName?: string;
  driverNumber: string;
  country: string;
  town: string;
  contactNumber: string;
  email: string;
  // defaultObjectNo?: string;
  password: string;
  status?: boolean;
  companies?: string[];
};

const driverSchema: Schema<Driver> = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    otherName: { type: String, default: "" },
    driverNumber: { type: String, required: true },
    status: String,
    country: { type: String, required: true },
    town: { type: String },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },

    password: {
      type: String,
      required: true,
      // select: false,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const DriverModel: Model<Driver> =
  mongoose.models?.Driver || mongoose.model<Driver>("Driver", driverSchema);

export { DriverModel };
