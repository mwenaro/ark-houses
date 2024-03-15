import { Category } from "@/types";
import { postData, updateById } from "@/utils";
import Swal from "sweetalert2";

export const postCategory = async (data: Category) => {
  try {
    let res = await postData(`/api/category/?vendor=${data?.vendor}`, data);
    console.log({ res });
    if (!res.success) throw new Error("Could not create category. Try again");

    Swal.fire("Success", "Category created successfully");
  } catch (error: any) {
    console.log({ error });
    Swal.fire("Error", error.message);
  }
};

export const updateCategory = async (
  data: Category,
  handleReset: any = null
) => {
  const { _id, name,  status, ...formData } = data;
 
  try {
    let res = await updateById(`/api/category/${_id}`, { name, status });
    console.log({ res });
    if (!res.success) throw new Error("Could not update category. Try again");

    Swal.fire("Success", "Category updated successfully");
  } catch (error: any) {
    console.log({ error });
    Swal.fire("Error", error.message);
  }
   handleReset && handleReset();
};
