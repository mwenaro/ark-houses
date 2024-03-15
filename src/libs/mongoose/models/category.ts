import { Category } from "@/types";
import mongoose from "mongoose";


const categorySchema = new mongoose.Schema<Category>(
  {
    vendor: String,
    name: String,
    status: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export const CategoryModel =
  mongoose.models?.Category ||
  mongoose.model<Category>("Category", categorySchema);
