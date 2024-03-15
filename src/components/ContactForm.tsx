"use client"
import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import { Button } from "@/components";

interface ContactFormValues {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
}

const ContactForm: React.FC = () => {
  const initialValues: ContactFormValues = {
    fullName: '',
    email: '',
    phone: '',
    message: '',
    subject: ''
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required')
  });

  const handleSubmit = (
    values: ContactFormValues,
    { setSubmitting, resetForm }: FormikHelpers<ContactFormValues>

  ) => {
    // Handle form submission here
    console.log(values);
    // After handling submission, you can reset form state
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="w-full flex flex-col bg-slate-300 max-w-[500px] mx-auto py-2 md:py-4 md:pt-8">
          <Input name="fullName" label="Full Name" />
          <Input name="email" label="Email" type="email" />
          <Input name="phone" label="Phone" type="tel" />
          <Input
            name="subject"
            label="Subject"
            type="select"
            options={[
              '',
              'Paternity / DNA Services',
              'Cancer Testing Services',
              'Life-Geno (Predictive DNA Services)',
              'Pharmacogenomics'
            ]}
          />
          <Input name="message" label="Message" type="textarea" />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mx-auto w-5/6 md:w-[400px] px-8 py-3 bg-blue-600 text-white my-4 rounded-lg"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
