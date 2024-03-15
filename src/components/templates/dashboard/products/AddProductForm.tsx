// "use client"
import { Img, Input, Typography, useDzUpload } from "@/components";
import AddButton from "@/components/templates/dashboard/AddButton";
import { ACCEPTED_IMAGE_EXT } from "@/constants";
import { Category } from "@/types";
import { ErrorMessage, Field } from "formik";
import { useState } from "react";

export default function AddProductForm({
  categories,
  setImgPath,
  initialImgPath,
}: {
  categories: Category[];
  setImgPath: any;
  initialImgPath?: string;
}) {
  const [showImagePrev, setShowImagePrev] = useState(false);
  const { filepath, success, uploadField, error } = useDzUpload(
    ACCEPTED_IMAGE_EXT,
    `${process.env.NEXT_PUBLIC_IMAGE_SERVER}/upload`,
    "image"
  );
  if (success || filepath) {
    setImgPath(filepath);
  }
  if (initialImgPath) {
    setImgPath(initialImgPath);
  }
  console.log({ imgUploadError: error });
  return (
    <div className=" flex flex-col w-full  mid:w-[500px] py-5  text-gray-600 ">
      <Typography variant="p" className="my-2 pl-3">
        CATEGORIES
      </Typography>
      <Input
        type="select"
        name="category"
        label="Categories"
        options={categories.map((c) => c.name)}
      />

      <Typography variant="p" className="my-2 pl-3">
        PRODUCT NAME
      </Typography>
      <Input type="text" name="name" label="" />
      <div className="px-3 pb-2  overflow-hidden">
        <Typography variant="p" className="mb-1">
          UPLOAD IMAGE
        </Typography>
        <div className="">
          {filepath || (initialImgPath && !showImagePrev) ? (
            <span onClick={() => setShowImagePrev(!showImagePrev)}>
              {" "}
              <Img
                alt="img"
                src={`${filepath || initialImgPath}`}
                className="h-[100px]"
              />
            </span>
          ) : (
            uploadField
          )}
        </div>
      </div>
      <Typography variant="p" className="my-2 pl-3">
        UNITS
      </Typography>
      <Input
        label="Units"
        type="select"
        name="units"
        placeholder="select units"
        className="outline block outline-1"
        options={["kilograms", "Gram", "Per pcs"]}
      />
      <div className="flex flex-row">
        <div className="w-1/2 ">
          <Typography variant="p" className="my-2 pl-3">
            MIN ORDER QUANTITY
          </Typography>
          <Input
            label=""
            name="minOrderQuantity"
            placeholder="Min Order Quantity"
            className="outline block outline-1"
            options={["kilograms", "Gram", "Per pcs"]}
          />
        </div>

        <div className="w-1/2 flex flex-col">
          <Typography variant="p" className="my-2 pl-3">
            PRICE IN KSH
          </Typography>

          <Input type="text" name="price" label="" />
        </div>
      </div>
      <Typography variant="p" className="my-2 pl-3">
        DESCRIPTION
      </Typography>
      <Input type="text" name="description" label="" />
      <div className="w-full flex flex-col">
        <Typography variant="p" className="my-2 pl-3">
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
      {
        <AddButton
          label={initialImgPath ? "Update Product" : "Add Product"}
          className="my-6 mx-12"
          type={"submit"}
          onClick={() => {
            setShowImagePrev(!showImagePrev);
          }}
        />
      }
    </div>
  );
}
