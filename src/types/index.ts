export * from './form-fields-types'
export interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  units: string;
  img?: string;
  vendor: string;
  images?: string[];
  minOrderQuantity: string | number;
  price: number;
  status: string;
  createdAt: Date;
}

export interface Category {
  _id?: string | number;
  name: string;
  vendor?: string;
  status: string;
  createdAt: Date;
}

export interface Banner {
  name: string;
  _id: string | number;
  vendor: string;
  src: string;
  status?: string;
  createdAt?: Date;
}

export interface Payments {
  name: string;
  id: string;
  status: string;
  refNo: string;
  amount: number;
  createdAt: Date;
  packageId: string;
}

export interface Packages {
  name: string;
  _id: string;
  price: number;
  createdAt: Date;
  staus?: string;
}

export interface Users {
  name: string;
  _id: string;
  email: string;
  role: "user" | "vendor" | "su" | "admin";
  createdAt: Date;
  staus?: string;
  phone: string;
  password: string;
}

export interface Activation {
  _id: string;
  accountId: string;
  createdAt: Date;
}

//
export type NavItem = {
  title: string;
  href: string;
};
