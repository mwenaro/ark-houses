import mongoose, { Document, Model } from "mongoose";

type CartProduct = {
  name: string;
  quantity: number;
  price: number;
  id?: string;
};

interface IOrderCustomer {
  name: string;
  phone: string;
  location: string;
}

interface IOrder extends Document {
  vendor: string;
  status: string;
  customer: IOrderCustomer;
  cart: CartProduct[];
}

const OrderSchema = new mongoose.Schema<IOrder>(
  {
    vendor: String,
     status: String,
    customer: {
      name: String,
      phone: String,
      location: String,
    },
    cart: [
      {
        name: String,
        quantity: Number,
        price: Number,
        id: String,
      },
    ],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const OrderModel: Model<IOrder> =
  mongoose.models?.Order || mongoose.model<IOrder>("Order", OrderSchema);

export { OrderModel}
