import { Product } from "@/types";
import { postData, updateById } from "@/utils";
import Swal from "sweetalert2";

export const postProduct = async (data: Product, cb:any=null) => {
  // console.log({data})
  try {
    let res = await postData(`/api/product/?vendor=${data?.vendor}`, data);
    console.log({ res });
    if (!res.success) throw new Error("Could not create Product. Try again");

    Swal.fire("Success", "Product created successfully");
  } catch (error: any) {
    console.log({ error });
    Swal.fire("Error", error.message);
  }
  // Refresh callback
  cb()
};

export const updateProduct = async (
  data: Product,
  handleReset: any = null
) => {
  const { _id, ...formData } = data;
 
  try {
    let res = await updateById(`/api/product/${_id}`,formData);
    console.log({ res });
    if (!res.success) throw new Error("Could not update Product. Try again");

    Swal.fire("Success", "Product updated successfully");
  } catch (error: any) {
    console.log({ error });
    Swal.fire("Error", error.message);
  }
  
   handleReset && handleReset();
};
