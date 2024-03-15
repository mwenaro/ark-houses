import mongoose from "mongoose";

interface Package {
    _id: string;
    name: string;
    price: number;
    createdAt: Date;
    status: string;
  }

const packageSchema = new mongoose.Schema<Package>({
    name: String,
    price: Number,
     status: String,
  },{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
  

export const PackageModel = mongoose.models?.Package ||  mongoose.model<Package>('Package', packageSchema);
