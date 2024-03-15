"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

import { Button, Img, Input, Typography } from "@/components";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { InputFieldProps } from "@/components/Input";
import {useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext";
import LocalStorageManager from "@/utils/localStorage";


const validationSchema = Yup.object().shape({
  email: Yup.string().required("This field  is required"),
  password: Yup.string().required("Password is required"),
});

interface LoginProps {
  className?: string;
}

const Login = ({ className = "" }: LoginProps) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const { data, setData } = useGlobalContext();
  const router = useRouter();
  const handleSubmit = async (values: any) => {
    // Handle form submission here

    try {
      const responseData = await (
        await fetch("/api/user/login", {
          body: JSON.stringify(values),
          method: "POST",
          headers: { "Content-Type": "application/json" },
        })
      ).json();
      // setIsLoading(false);

      if (responseData.activationError) {
        Swal.fire("Inactive User, check your inbox for activation link");
        return router.push("/");
      }

      if (!responseData.vendor) {
        throw new Error("Login failed. Check your login details and try again");
      }

      setData({
        ...data,
        user: responseData,
      });
      if (LocalStorageManager.isLocalStorageSupported()) {
        LocalStorageManager.set("user", responseData);
      }
      console.log({ loggedUser: responseData });
      Swal.fire("Login success");
      router.push(`/${responseData.vendor}/dashboard`);
    } catch (error: any) {
      console.log({ loginError: error.message });
      Swal.fire(error.message);
    }
  };

  const loginFields = [
    {
      name: "email",
      label: "Enter Email or code ",
      type: "text",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
    },
  ] as InputFieldProps[];

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
     text-auth-gray border border-solid  border-blue-300`,
          className
        )}
      >
        <div className="w-full p-[20px] h-[111] flex flex-col border border-solid border-b border-blue-300">
          <div className="text-center ">
            {/* <Link href={"/"}>
              <Img
                src="/assets/logo.png"
                alt="odasasa logo"
                className="h-12 aspect-ratio"
              />
            </Link> */}
          </div>
          <Typography
            variant={"p"}
            className="text-center text-base text-auth-gray font-normal"
          >
           Login Form
          </Typography>
          {/* <hr /> */}
        </div>
        <div className="w-full h-[244px] flex flex-col justify-center items-center px-3">
          {loginFields.map((field, indx) => (
            <Input
              key={indx}
              name={field.name}
              label={field.label}
              type={field.type}
              className={inputCommonClasses}
            />
          ))}

          <Input
            name="remember_me"
            label="Remember Me"
            type="checkbox"
            className="my-2 px-3"
            labelClasses="text-[15px] text-auth-gray font-normal py-3"
          />
          <div className="px-3 w-full">
            <Button
              className="bg-auth-blue hover:auth-hover_blue text-white w-full  py-2"
              type="submit"
            >
              Sign in
            </Button>
          </div>
        </div>

        <div className="w-full h-[45px] flex  gap-3 px-3 py-5 justify-center items-center border border-solid border-b border-blue-300">
          {[
            { title: "Create An Account", href: "/auth/signup" },
            { title: "Forgot Password", href: "/auth/forgot-password" },
          ].map((item, indx) => (
            <Link
              key={indx}
              href={item.href}
              className={`w-1/2  text-center  hover:text-auth-red text-auth-gray`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </Form>
    </Formik>
  );
};

export default Login;
