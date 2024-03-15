"use client";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Button, Img, Input, Typography } from "@/components";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { InputFieldProps } from "@/components/Input";
import Swal from "sweetalert2";
// import { InputFieldProps } from '.././Input';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

interface ForgotPasswordProps {
  setOp?: (flag: Boolean) => void;
  className?: string;
}

const ForgotPassword = ({ setOp, className = "" }: ForgotPasswordProps) => {
  const initialValues = {};

  const handleSubmit = async (values: any, { resetForm }:any) => {
    // Handle form submission here
    try {
      const data = await (
        await fetch("/api/password", {
          body: JSON.stringify(values),
          method: "POST",
          headers: { "Content-Type": "application/json" },
        })
      ).json();
      console.log({ values, data });
      // alert(JSON.stringify(values))
      if (!data.msg) Swal.fire("Somethong went wrong try again");
      else Swal.fire(data.msg);
      return resetForm();

    } catch (error: any) {
      console.log({ msg: error.message });
     Swal.fire(error.message);
    }
  };

  const inputCommonClasses =
    "mb-3  py-2 rounded-sm w-full outline outline-2 outline-auth-border_color";
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
     text-auth-gray border border-solid  border-blue-300`,
          className
        )}
      >
        <div className="w-full p-[20px] h-[111px] flex flex-col  border-solid border-b border-blue-300">
          <div className="text-center ">
            {/* <Link href={"/"}>
              <Img
                src="/assets/logo.png"
                alt="odasasa logo"
                className="h-12 aspect-ratio"
              /> */}
            {/* </Link> */}
            <Typography
              variant={"p"}
              className=" text-base text-auth-gray font-bold "
            >
              Please enter your information.
            </Typography>
          </div>
          {/* <hr /> */}
        </div>
        <div className="w-full h-[200px] flex flex-col justify-center items-center px-3  border-solid border-b border-blue-300">
          <Typography
            variant={"p"}
            className=" text-base text-auth-gray font-normal py-4"
          >
            Do not worry, we will send you an email to reset your password.
          </Typography>

          {/* <div className='px-3 w-full'> */}
          <Input
            name={"email"}
            label={"Enter Your Email"}
            type={"email"}
            className={inputCommonClasses}
          />
          <Button
            className="mx-3 bg-auth-blue hover:auth-hover_blue text-white w-full  py-2"
            type="submit"
          >
            Reset Password
          </Button>

          {/* </div> */}
        </div>

        <div className="w-full h-[45px] flex  gap-3 px-3 py-5 justify-center items-center  border-solid border-t border-blue-300">
          <Typography variant="p" className="h-full text-auth-gray">
            Do not have an account?{" "}
            <Link
              href={"/auth/signup"}
              className={`w-full  text-center text-auth-red hover:text-auth-gray`}
            >
              Sign Up{" "}
            </Link>
          </Typography>
        </div>
      </Form>
    </Formik>
  );
};

export default ForgotPassword;
