import * as yup from 'yup';
import mongoose, { Model } from 'mongoose';

export type Truck = {
  _id?: string;
  name: string;
  company : string | any;
  plateNumber: string;
  objectModel: string;
  simCardNumber: string;
  secondarySimNumber: string;
  imeiNumber: string;
  objectCategory: string;
  objectAxel: string;
  manufactureDate: string;
  purchaseDate: string;
  gpsInstallationDate: string;
  gpsWarranty: string;
  chassisNumber: string;
  engineNumber: string;
  odometer: string;
  passengerSeatCount: string;
};

// Yup Validation Schema
const truckSchemaValidation = yup.object().shape({
  name: yup.string().required('Name is required'),
  company: yup.string().required('Name is required'),
  plateNumber: yup.string().required('Plate Number is required'),
  objectModel: yup.string().required('Object Model is required'),
  simCardNumber: yup.string().required('SIM Card Number is required'),
  secondarySimNumber: yup.string(),
  imeiNumber: yup.string().required('IMEI Number is required'),
  objectCategory: yup.string(),
  objectAxel: yup.string(),
  manufactureDate: yup.string(),
  purchaseDate: yup.string(),
  gpsInstallationDate: yup.string(),
  gpsWarranty: yup.string(),
  chassisNumber: yup.string(),
  engineNumber: yup.string(),
  odometer: yup.string(),
  passengerSeatCount: yup
    .string()
    .matches(/^\d+$/, 'Passenger Seat Count must be a number'),
});

const truckSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    plateNumber: { type: String, required: true },
    objectModel: { type: String, required: true },
    simCardNumber: { type: String, required: true },
    secondarySimNumber: { type: String },
    imeiNumber: { type: String, required: true },
    objectCategory: { type: String },
    objectAxel: { type: String },
    manufactureDate: { type: String },
    purchaseDate: { type: String },
    gpsInstallationDate: { type: String },
    gpsWarranty: { type: String },
    chassisNumber: { type: String },
    engineNumber: { type: String },
    odometer: { type: String },
    passengerSeatCount: { type: String },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const truckFormFields = [
  { label: 'Name', name: 'name', type: 'text' },
  { label: 'Plate Number', name: 'plateNumber', type: 'text' },
  { label: 'Object Model', name: 'objectModel', type: 'text' },
  { label: 'SIM Card Number', name: 'simCardNumber', type: 'text' },
  { label: 'Secondary SIM Number', name: 'secondarySimNumber', type: 'text' },
  { label: 'IMEI Number', name: 'imeiNumber', type: 'text' },
  { label: 'Object Category', name: 'objectCategory', type: 'text' },
  { label: 'Object Axel', name: 'objectAxel', type: 'text' },
  { label: 'Manufacture Date', name: 'manufactureDate', type: 'text' },
  { label: 'Purchase Date', name: 'purchaseDate', type: 'text' },
  { label: 'GPS Installation Date', name: 'gpsInstallationDate', type: 'text' },
  { label: 'GPS Warranty', name: 'gpsWarranty', type: 'text' },
  { label: 'Chassis Number', name: 'chassisNumber', type: 'text' },
  { label: 'Engine Number', name: 'engineNumber', type: 'text' },
  { label: 'Odometer', name: 'odometer', type: 'text' },
  { label: 'Passenger Seat Count', name: 'passengerSeatCount', type: 'text' },
];

const initialTruckValues: Truck = {
  name: '',
  company: "",
  plateNumber: '',
  objectModel: '',
  simCardNumber: '',
  secondarySimNumber: '',
  imeiNumber: '',
  objectCategory: '',
  objectAxel: '',
  manufactureDate: '',
  purchaseDate: '',
  gpsInstallationDate: '',
  gpsWarranty: '',
  chassisNumber: '',
  engineNumber: '',
  odometer: '',
  passengerSeatCount: '',
};

const TruckModel: Model<Truck> =
  mongoose.models?.Truck || mongoose.model<Truck>('Truck', truckSchema);

export {
  truckSchemaValidation,
  TruckModel,
  truckFormFields,
  initialTruckValues,
};
