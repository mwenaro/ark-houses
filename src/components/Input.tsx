"use client";
import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { twMerge } from "tailwind-merge";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TSelectOption } from "@/types";
//import { string, object } from 'yup';
function isArrayofObjects(arr: any[]) {
  return arr.every(
    (element: any) =>
      typeof element === "object" && !Array.isArray(element) && element !== null
  );
}
export interface InputFieldProps {
  name: string;
  label: string;
  type?: string;
  // options?: string[] | { label: string; value: any }[];
  options?: TSelectOption[];
  className?: string;
  placeholder?: string;
  labeled?: boolean;
  labelClasses?: string;
  readOnly?: boolean;
}

const Input: React.FC<InputFieldProps> = ({
  name,
  label,
  labeled = false,
  type = "text",
  className = "",
  options = [],
  labelClasses,
  ...others
}) => {
  const [showPwd, setShowPwd] = useState(false);
  const classes = twMerge(
    ` px-3 py-2 mt-1  border rounded-lg  focus:ring focus:ring-indigo-300 focus:outline-none `,
    className
  );

  return (
    <div className="mb-1 flex flex-col px-3  w-full relative">
      {(labeled || ["date", "datetme-local"].includes(type)) &&
        !["checkbox"].includes(type) && (
          <label
            htmlFor={name}
            className={twMerge("block text-md font-bold ", labelClasses)}
          >
            {label}
          </label>
        )}
      {type === "textarea" ? (
        <Field
          as="textarea"
          rows={3}
          id={name}
          name={name}
          placeholder={!labeled ? label : ""}
          className={classes}
          {...others}
        />
      ) : type === "select" ? (
        <Field
          {...others}
          as="select"
          id={name}
          name={name}
          className={` w-full ${classes}`}
        >
          {!labeled ? <option value={""}>-- Select {label} ---</option> : ""}
          {options &&
            (isArrayofObjects(options)
              ? options.map((op: any, indx: number) => (
                  <option key={indx} value={op.value}>
                    {op.label}
                  </option>
                ))
              : (!labeled
                  ? options.filter((op) => !labeled && op !== "")
                  : options
                ).map((op) => (
                  <option
                    key={op as string | number}
                    value={op as string | number}
                  >
                    {op as string | number}
                  </option>
                )))}
        </Field>
      ) : type === "password" ? (
        <>
          <Field
            {...others}
            id={name}
            type={showPwd ? "text" : type}
            name={name}
            className={` w-full ${classes}`}
          />
          <span
            className="h-full absolute  right-4 flex justify-center items-center"
            onClick={() => setShowPwd(!showPwd)}
          >
            {!showPwd ? (
              <FaEye className="my-auto" />
            ) : (
              <FaEyeSlash className="my-auto" />
            )}
          </span>
        </>
      ) : type === "checkbox1" ? (
        <label
          htmlFor={name}
          className={twMerge("text-md font-bold ", labelClasses)}
        >
          <Field
            type={type}
            id={name}
            name={name}
            className={"mr-3"}
            placeholder={!labeled ? label : ""}
            {...others}
          />
          {label}
        </label>
      ) : type === "checkbox" ? (
        <div className="px-3 py-2">
          <h3 className={twMerge("block text-lg font-bold ", labelClasses)}>
            {label}
          </h3>
          {options.map((option: any, indx: number) => (
            <p key={indx}>
              <label className={twMerge("text-md font-bold p-2", labelClasses)}>
                <Field
                  type="checkbox"
                  id={`${name}-${option.value}`}
                  // name={`${name}[${option.value}]`}
                  name={`${name}`}
                  value={option.value}
                  {...others}
                />
                <span className="px-3 py-1">{option.label}</span>
              </label>
            </p>
          ))}
        </div>
      ) : (
        <Field
          type={type}
          id={name}
          name={name}
          className={classes}
          placeholder={!labeled ? label : ""}
          {...others}
        />
      )}

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default Input;
