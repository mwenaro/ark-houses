import React from "react";
import { Field, ErrorMessage } from "formik";
import AddButton from "@/components/templates/dashboard/AddButton";
import { Typography } from "@/components";



const EditCategoryForm: React.FC<any> = ({ handleSubmit }) => {
  return (
    <div className="flex flex-col w-[500px] text-gray-600">
        <Typography variant="h2">Edit Category</Typography>
      <Typography variant="p" className="my-2">
        CATEGORY NAME
      </Typography>
      <Field
        type="text"
        name="name"
        placeholder="Max 20 Characters"
        maxLength={20}
        className="px-6 py-3 outline block my-2"
      />
      <ErrorMessage name="name" component="div" className="text-red-600" />

      {/* <div className="flex flex-row"> */}
        {/* <div className="w-1/2">
          <Typography variant="p" className="my-2">
            CATEGORIES UNIT
          </Typography>
          <Field
            as="select"
            name="units"
            placeholder="select units"
            className="outline block"
          >
            <option value="">Select Unit</option>
            {["kilograms", "Gram", "Per pcs"].map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </Field>
          <ErrorMessage name="units" component="div" className="text-red-600" />
        </div> */}

        <div className="w-full flex flex-col">
          <Typography variant="p" className="my-2">
            CATEGORY STATUS
          </Typography>
          <div className="w-full flex space-x-2 outline px-6 my-3">
            <label className="text-green-600">
              <Field type="radio" name="status" value="active" />
              Active
            </label>
            <label className="text-red-600">
              <Field type="radio" name="status" value="pause" />
              Pause
            </label>
          </div>
          <ErrorMessage
            name="status"
            component="div"
            className="text-red-600"
          />
        </div>
      {/* </div> */}
      <AddButton
        label="Update Category"
        className="my-6 mx-12"
        type="submit"
        onClick={() =>console.log("")}
      />
    </div>
  );
};

export default EditCategoryForm;
