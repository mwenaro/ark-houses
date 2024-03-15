"use client";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Button, Input, Typography } from "@/components";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { InputFieldProps } from "@/components/Input";
import { useRouter } from "next/navigation";
import { postData } from "@/utils";
import Swal from "sweetalert2";
import { isValidPhoneNumber } from "@/utils/key_functions";
import { signupFormFields } from "@/constants";
// import { verifyEmail } from "@/libs/email-verify";
async function checkFieldExistance(field: [string, string], table: string) {
  if (!field[1]) return true;
  try {
    let data = await postData(`/api/exists/?table=${table}`, {
      [field[0]]: field[1],
    });
    if (data?.success) return false;
    return true;
  } catch (error: any) {
    return true;
  }
}
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .test("checkIfExists", "Email already exists", async function (value: any) {
      return (
        // verifyEmail(value, (error, infor) => {
        //   if (error) return false;
        //   return infor.success;
        // }) ||
        await checkFieldExistance(["email", value], "users")
      );
    })
    .email("Invalid email address")
    .required("Email is required"),
  // idNumber: Yup.string()
  //   .required("ID Number is required")
  //   .test(
  //     "checkIfExists",
  //     "ID Number already exists",
  //     async function (value: any) {
  //       return await checkFieldExistance(["idNumber", value], "users");
  //     }
  //   ),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  businessName: Yup.string().required("Field is required"),
  vendor: Yup.string()
    .required("Field is required")
    .test("checkIfExists", "Code already taken", async function (value: any) {
      return await checkFieldExistance(["vendor", value], "users");
    }),
  phone: Yup.string()
    .required("Field is required")
    .test(
      "checkIfExists",
      "Phone Number already exists",
      async function (value: any) {
        return await checkFieldExistance(["phone", value], "users");
      }
    )
    .test("checkValidity", "Invalid Phone Number ", function (value: any) {
      return isValidPhoneNumber(value);
    }),
  whatsappNumber: Yup.string()
    .required("Field is required")
    .test(
      "checkIfExists",
      "Phone Number already exists",
      async function (value: any) {
        return await checkFieldExistance(["whatsappNumber", value], "users");
      }
    )
    .test("checkValidity", "Invalid Phone Number ", function (value: any) {
      return isValidPhoneNumber(value);
    }),
});

interface SignupProps {
  setOp?: (flag: Boolean) => void;
  className?: string;
}

const Signup = ({ setOp, className = "" }: SignupProps) => {
  const initialValues = {
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    phone: "",
    whatsappNumber:"",
    businessName: "",
    vendor: "",
  };
  const router = useRouter();
  const handleSubmit = async (values: any) => {
    // Handle form submission here
    try {
      const data = await (
        await fetch("/api/user", {
          body: JSON.stringify(values),
          method: "POST",
          headers: { "Content-Type": "application/json" },
        })
      ).json();
      console.log(data);
      // alert(JSON.stringify(data));
      if (!data.success)
        throw new Error(
          "There was an error creating your account.Pleasetry again"
        );
      Swal.fire(
        "Account Successfully created. Check your inbox for activation link"
      );

      router.push("/");
    } catch (error: any) {
      Swal.fire("There was an error creating your account.Pleasetry again");

      console.log({ msg: error.message });
    }
  };
  /*
  const signupFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
    },
    // {
    //   name: "idNumber",
    //   label: "ID Number",
    //   type: "string",
    // },

    {
      name: "phone",
      label: "Phone Number",
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
  ] as InputFieldProps[];
*/
  const inputCommonClasses =
    "mb-3 px-3 py-2 rounded-sm w-full outline outline-2 outline-auth-border_color";
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form
        className={twMerge(
          `w-full max-w-[500px]
      mx-auto flex flex-col  bg-slate-200
      justify-center items-center
     text-auth-gray border border-solid border-blue-300`,
          className
        )}
      >
        <div className="w-full p-[20px] h-[111] flex flex-col  border-solid border-b border-blue-300">
          <Typography
            variant={"h3"}
            className=" text-xl text-auth-gray font-normal "
          >
            Registrations Form
          </Typography>
          <Typography
            variant={"p"}
            className=" text-base text-auth-gray font-bold text-center"
          >
            Please enter your user information
          </Typography>
          {/* <hr /> */}
        </div>
        <div className="w-full  flex flex-col justify-center items-center px-3 pt-3 border-solid border-b border-blue-300">
          {signupFormFields.map((field, indx) => (
            <Input
              key={indx}
              name={field.name}
              label={field.label}
              type={field.type}
              className={inputCommonClasses}
            />
          ))}

          <div className="px-3 w-full mb-3">
            <Button
              className="bg-auth-blue hover:auth-hover_blue text-white w-full  py-2"
              type="submit"
            >
              Register My Account
            </Button>
          </div>

          {/* <Input name="remember_me" label='By creating an account, you agree the terms and conditions' type="checkbox" className='my-2 px-3' labelClasses='text-[15px] text-auth-gray font-normal py-3' /> */}

          {/* <div className='px-3 w-full mb-3'>
            <Button className="bg-auth-facebook_blue hover:auth-hover_blue text-white w-full  py-2" type='submit' >Facebook</Button>

          </div>

          <div className='px-3 w-full mb-3'>
            <Button className="bg-auth-twitter_blue hover:auth-hover_blue text-white w-full  py-2" type='submit' >Twitter</Button>

          </div> */}
        </div>

        <div className="w-full h-[45px] px-3 py-3 justify-center items-center  border-solid border-t border-blue-300">
          <Typography
            variant={"p"}
            className="px-3 text-center text-base text-auth-gray font-normal"
          >
            Already a member?{" "}
            <Link
              href="/auth/login"
              className={` text-auth-red hover:text-auth-gray`}
            >
              Login Here
            </Link>
          </Typography>
        </div>
      </Form>
    </Formik>
  );
};

export default Signup;
