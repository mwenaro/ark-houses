"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Swal from "sweetalert2";

const HomeContactUs: React.FC = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    try {
      const res = await (
        await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json" },
        })
      ).json();
      if (!res.success) throw new Error("Something Went Wrong, try again");
      console.log(res);
      Swal.fire("Success", "Form sucesfully submited");
    } catch (error: any) {
      console.log({ msg: error.message });
      Swal.fire("Error", error.message);
    }
  };

  return (
    <div
      className="flex flex-col  items-center justify-center p-4 mb-20"
      id="contact-us"
    >
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <div className="w-full flex flex-col md:flex-row-reverse items-center justify-around gap-2 md:gap-12">
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-full max-w-md mt-12 ">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    htmlFor="name"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>
                <div className="w-full px-3">
                  <label
                    htmlFor="email"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Email
                  </label>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  className="w-full bg-gray-200 rounded py-3 px-4 block"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-4 md:mt-0 px-2 md:px-12 flex flex-col gap-2">
          <p className="text-xl font-bold mb-4">Contact Details</p>
          <p>Email: info@easytruck.com</p>
          <p>Phone: +254 7xx -xxx-xxx</p>
          <p>Physical Address: xxxx, Mombasa, Kenya</p>
          <div className="flex mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mr-4"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 mr-4"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContactUs;
