import mongoose from "mongoose";

interface Payment {
    _id: string;
    vendorId: string;
    name: string;
    status: string;
    refNo: string;
    amount: number;
    createdAt: Date;
    packageId: string;
  }
  
const paymentSchema = new mongoose.Schema<Payment>({
    vendorId: String,
    name: String,
    status: String,
    refNo: String,
    amount: Number,
     packageId: String,
  },{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
  
export const PaymentModel = mongoose.models?.Payment ||  mongoose.model<Payment>('Payment', paymentSchema);
