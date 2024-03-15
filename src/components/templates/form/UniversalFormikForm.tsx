import React, { ReactNode } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

interface UniversalFormProps {
  initialValues: object;
  validationSchema: Yup.ObjectSchema<any>;
  children : ReactNode
  handleSubmit: (values: any, { resetForm }:any) => void;
}

const UniversalForm: React.FC<UniversalFormProps> = ({
  initialValues,
  validationSchema,
  handleSubmit,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        {children}
        {/* <button type="submit">Submit</button> */}
      </Form>
    </Formik>
  );
};

export default UniversalForm;
