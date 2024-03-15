import { ReactNode } from "react";
import { Banner, Category } from ".";

export interface User {
  _id?: string;
  name: string;
  email: string;
  // idNumber: string;
  role: "vendor" | "admin" | "su";
  created_at: Date;
  status: string;
  phone: string;
  whatsappNumber: string;
  password: string;
  confirmPassword: string;
  businessName: string;
  vendor: string;
  activationStatus?: boolean;
}

export interface ElementProps {
  className?: string;
  children?: ReactNode;
}

export type CartProduct = {
  name: string;
  quantity: number;
  price: number;
  id?: string;
};

export type Order = null | {
  customer: {
    name: string;
    phone: string;
    location: string;
  };
  vendor?: string;
  cart: CartProduct[];
};

export type GlobalData = {
  user: User | null;
  categories: Category[];
  banners: Banner[];
  shoppingCart: CartProduct[];
  order: Order;
  shopDetails: User | null;
  isModalOpen: boolean;
  cartFuncs: any;
  uploadedImgPath?: string;
  handleLogout: () => void;
};

export type FormField = {
  name: string;
  label: string;
  type: string;
  labeled?: boolean;

  options?: string[];
};
