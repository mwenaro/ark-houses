import { User } from "@/types/core";
import mongoose from "mongoose";
import * as Yup from "yup";

const userSchema = new mongoose.Schema<User>(
  {
    name: {
      type: String,
      required: [true, "Full Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      index: true,
      validate: {
        validator: (value: string) => {
          return Yup.string().email("Invalid email address").isValidSync(value);
        },
        message: "Invalid email address",
      },
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
    },
    activationStatus: {
      type: Boolean,
      default: false,
    },
    businessName: {
      type: String,
      required: [true, "Business Name is required"],
    },
    vendor: {
      type: String,
      unique: true,
      index: true,
      required: [true, "Business Code is required"],
    },
    phone: {
      type: String,
      unique: true,
      index: true,
      required: [true, "Phone is required"],
    },
    whatsappNumber: {
      type: String,
      unique: true,
      required: [true, "Whatsapp Number is required"],
    },
    status: Boolean,
    role: {
      type: String,
      required: [true, "Role is required"],
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    strict: true,
  }
);

const UserModel =
  mongoose.models?.User || mongoose.model<User>("User", userSchema);

export { UserModel };
