import mongoose from "mongoose";
import { UserModel } from ".";
import { boolean } from "yup";

interface Activation {
  _id: string;
  email: string;
  isUsed: boolean;
  token: string;
  createdAt: Date;
}
const activationSchema = new mongoose.Schema<Activation>(
  {
    email: {
      type: String,
      required: true,
    },
    isUsed: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: "24h", // Set the expiration time for the reset tokens (e.g., 24 hours)
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export const ActivationModel =
  mongoose.models?.Activation ||
  mongoose.model<Activation>("Activation", activationSchema);
