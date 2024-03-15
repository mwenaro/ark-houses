import mongoose from "mongoose";

interface PasswordReset {
  email: string;
  token: string;
  isUsed: boolean;
}

const passwordResetSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  isUsed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: "24h", // Set the expiration time for the reset tokens (e.g., 24 hours)
  },
});

export const PasswordResetModel =
  mongoose.models?.PasswordReset ||
  mongoose.model<PasswordReset>("PasswordReset", passwordResetSchema);
