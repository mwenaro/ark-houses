import { Input, Typography } from "@/components";
import AddButton from "@/components/templates/dashboard/AddButton";
import { ErrorMessage, Field } from "formik";

export default function AddCategoryForm() {
  return (
    <div className=" flex flex-col w-[500px]  text-gray-600">
      <Typography variant="p" className="my-2">
        CATEGORY NAME
      </Typography>
      <Input type="text" name="name" label="" />

      {/* <div className="flex flex-row"> */}
      {/* <div className="w-1/2 ">
                <Typography variant="p" className="my-2">
                  CATEGORIES UNIT{" "}
                </Typography>
                <Input
                  type="select"
                  name="units"
                  label=""
                  options={["kilograms", "Gram", "Per pcs"]}
                />
                <ErrorMessage
                  name="units"
                  component="div"
                  className="text-red-600"
                />
              </div> */}

      <div className="w-full flex flex-col">
        <Typography variant="p" className="my-2">
          CATEGORY STATUS
        </Typography>
        <div className="w-full flex space-x-2 outline outline-1 px-6 py-3  my-3">
          <label className="text-green-600">
            <Field type="radio" name="status" value="active" />
            <span className="mx-3">Active</span>
          </label>
          <label className="text-red-600">
            <Field type="radio" name="status" value="pause" />
            <span className="mx-3">Paused</span>
          </label>
        </div>
        <ErrorMessage name="status" component="div" className="text-red-600" />
      </div>
      {/* </div> */}
      <AddButton
        label="Add Category"
        className="my-6 mx-12"
        type={"submit"}
        onClick={() => {}}
      />
    </div>
  );
}
