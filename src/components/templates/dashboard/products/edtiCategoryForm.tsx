import React from "react";
import { Field, ErrorMessage } from "formik";
import AddButton from "@/components/templates/dashboard/AddButton";
import { Input, Typography } from "@/components";
import { Category } from "@/types";

const EditProductForm: React.FC<any> = ({
  categories,
}: {
  categories: Category[];
}) => {
  return (
    <div className=" flex flex-col w-[500px]  text-gray-600">
      <Typography variant="p" className="my-2">
        CATEGORIES
      </Typography>
      <Input
        type="select"
        name="category"
        label="Categories"
        options={categories.map((c) => c.name)}
      />

      <Typography variant="p" className="my-2">
        PRODUCT NAME
      </Typography>
      <Input type="text" name="name" label="" />

      <div className="flex flex-row">
        <div className="w-1/2 ">
          <Typography variant="p" className="my-2">
            UNIT
          </Typography>
          <Input type="text" name="units" label="" />
        </div>

        <div className="w-1/2 flex flex-col">
          <Typography variant="p" className="my-2">
            PRICE IN KSH
          </Typography>

          <Input type="text" name="price" label="" />
        </div>
      </div>
      <div className="w-full flex flex-col">
        <Typography variant="p" className="my-2">
          PRODUCT STATUS
        </Typography>
        <div className="w-full flex space-x-2 outline outline-1 px-6 py-3  my-3">
          <label className="text-green-600">
            <Field type="radio" name="status" value="active" />
            <span className="mx-3">In stock</span>
          </label>
          <label className="text-red-600">
            <Field type="radio" name="status" value="pause" />
            <span className="mx-3">Out of stock</span>
          </label>
        </div>
        <ErrorMessage name="status" component="div" className="text-red-600" />
      </div>
      <AddButton
        label="Add Product"
        className="my-6 mx-12"
        type={"submit"}
        onClick={() => {}}
      />
    </div>
  );
};

export default EditProductForm;
