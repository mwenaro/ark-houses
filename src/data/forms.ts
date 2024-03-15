import { EAST_AFRICAN_COUNTRIES, EAST_AFRICAN_TOWNS } from "./countries";

export const DriverFormFields = [
    { name: 'firstName', label: 'First Name', type: 'text' },
    { name: 'lastName', label: 'Last Name', type: 'text' },
    { name: 'driverNumber', label: 'Driver Number', type: 'text' },
    { name: 'state', label: 'State', type: 'select', options :EAST_AFRICAN_COUNTRIES },
    { name: 'city', label: 'City', type: 'select', options : EAST_AFRICAN_TOWNS.map(c=>c.town) },
    { name: 'contactNumber', label: 'Contact Number', type: 'text' },
    { name: 'defaultObjectNo', label: 'Default Object No', type: 'text' },
    // { name: 'password', label: 'Password', type: 'password' },
  ];