import { Banner } from "@/types";
import mongoose from "mongoose";


const bannerSchema = new mongoose.Schema<Banner>(
  {
    vendor: {
      type: String,
      required: true,
    },
    name: String,
    src: {
      type: String,
      required: true,
    },
    status: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export const BannerModel =
  mongoose.models?.Banner || mongoose.model<Banner>("Banner", bannerSchema);
