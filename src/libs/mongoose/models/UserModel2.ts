// import { User } from "@/types/core";
// import mongoose, { Schema } from "mongoose";
// import * as Yup from "yup";
// type User_ = Omit <User , '_id'>

// const userSchema = new Schema<User>({
//   name: {
//     type: String,
//     required: [true, "Full Name is required"],
//   },
//   email: {
//     type: String,
//     required: [true, "Email is required"],
//     validate: {
//       validator: (value: string) => {
//         return Yup.string().email("Invalid email address").isValidSync(value);
//       },
//       message: "Invalid email address",
//     },
//   },
//   idNumber: {
//     type: String,
//     required: [true, "ID Number is required"],
//   },
//   password: {
//     type: String,
//     required: [true, "Password is required"],
//     minlength: [8, "Password must be at least 8 characters long"],
//   },
//   confirmPassword: {
//     type: String,
//     required: [true, "Confirm Password is required"],
//     validate: {
//       validator: function (value: string) {
//         return this.password === value;
//       },
//       message: "Passwords must match",
//     },
//   },
//   businessName: {
//     type: String,
//     required: [true, "Business Name is required"],
//   },
//   businessCode: {
//     type: String,
//     required: [true, "Business Code is required"],
//   },
//   phone: {
//     type: String,
//     required: [true, "Phone is required"],
//   },
// });

// // const UserModel = mongoose.model<IUser>('User', userSchema);

// // module.exports = UserModel;

// export const UserModel =
//   mongoose.models?.User || mongoose.model<User>("User", userSchema);
