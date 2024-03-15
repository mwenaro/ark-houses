import { NavItem } from "./types";

export const COMPANY_NAME = null || "";
export const MAIN_EMAIL = "";
export const LOCATION = "";
export const WHATSAPP_NUMBER = "";
export const PHONE_NUMBER = "";

export const signupFormFields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
  },
  {
    name: "whatsappNumber",
    label: "Whatsapp Number",
    type: "tel",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
  },
  {
    name: "businessName",
    label: "Business Name",
    type: "text",
  },
  {
    label: "Business Code",
    name: "vendor",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
  },
] as { name: string; label: string; type: string }[];


export const NAV_ITEMS: NavItem[] = [
    { title: "Dashboard", href: "" },
    { title: "Account", href: "account" },
  ],
  [first, last] = NAV_ITEMS;

export const VENDOR_NAV_ITEMS: NavItem[] = [
  first,
  { title: "Categories", href: "categories" },
  { title: "Products", href: "products" },
  { title: "Banners", href: "banners" },
  { title: "Orders", href: "orders" },
  last,
];

export const ADMIN_NAV_ITEMS: NavItem[] = [
  first,
  { title: "Vendors", href: "vendors" },
  { title: "Payments", href: "payments" },
  { title: "Wallet", href: "wallet" },
  last,
];


export const ACCEPTED_IMAGE_EXT = ['jpeg', 'gif', 'jpg', 'png', 'bmp', 'tiff', 'webp', 'svg', 'ico'];