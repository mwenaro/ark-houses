"use client";
import * as Yup from "yup";

import Modal from "@/components/molecules/Modal";
import { UniversalFormikForm } from "@/components/templates/form";
import { useGlobalContext } from "@/context/GlobalContext";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./edtiCategoryForm";
import { postProduct, updateProduct } from "./handleSubmit";
import LocalStorageManager from "@/utils/localStorage";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddProductModal({ selectedProduct, categories }: any) {
  const router = useRouter();
  const { data: globalData, setData } = useGlobalContext(),
    { isModalOpen } = globalData;
  const user = globalData.user || LocalStorageManager?.get("user");
  const[imgPath, setImgPath] = useState("")
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setData({ ...globalData, isModalOpen: false })}
      className=" rounded-none overflow-y-scroll"
    >
      <UniversalFormikForm
        handleSubmit={(values, { resetForm }) => {
          !selectedProduct
            ? postProduct({ ...values, vendor: user.vendor,img:imgPath }, () => {
                resetForm();
                router.refresh();
              })
            : updateProduct(values, () => {
                resetForm();
                setData({
                  ...globalData,
                  isModalOpen: !isModalOpen,
                });
              });
          resetForm();
          router.refresh();
        }}
        initialValues={
          selectedProduct ?? {
            name: "",
            img: "",
            status: "active",
            units: "",
            category: "",
            price: 0,
            minOrderQuantity: "",
            description: "",
          }
        }
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .required("Product name is required")
            .max(20, "Product name must be at most 20 characters"),
          units: Yup.string().required("Product unit is required"),
          img: Yup.string(),
          minOrderQuantity: Yup.string().required("This field is required"),
          description: Yup.string()
            .min(20, "Description should be at least 20 characters long")
            .max(200, "Description should have max 200 characters "),
          status: Yup.string().oneOf(
            ["active", "pause"],
            "Invalid status selection"
          ),
          price: Yup.number().required("Price is required"),
          category: Yup.string().required("Category is required"),
        })}
      >
        {!selectedProduct ? (
          <AddProductForm categories={categories} setImgPath ={setImgPath} />
        ) : (
          // <EditProductForm handleSubmit={() => console.log("")}  />
          <AddProductForm categories={categories} setImgPath ={setImgPath} initialImgPath={selectedProduct.img || ''} />
        )}
      </UniversalFormikForm>
    </Modal>
  );
}
