"use client";

import { Wrapper } from "@/components/templates/dashboard/main";

import { FaEdit } from "react-icons/fa";
import { strCapitalize } from "@/utils/str_functions";
import { DeleteButton } from "@/components";
import { useGlobalContext } from "@/context/GlobalContext";
import Modal from "@/components/molecules/Modal";

import { UniversalFormikForm } from "@/components/templates/form";
import * as Yup from "yup";

import { postCategory, updateCategory } from "./handleSubmit";
import LocalStorageManager from "@/utils/localStorage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AddCategoryForm from "./AddCategoryForm";
import EditCategoryForm from "./edtiCategoryForm";
import { Category } from "@/types";
import { useFetch } from "@/hooks";

export default function Categories({ vendor }: any) {
  const { data: globalData, setData } = useGlobalContext(),
    { isModalOpen } = globalData;
  let user = globalData.user || LocalStorageManager.get("user");
  const router = useRouter();
  if (!user) router.push("/auth/login");

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  let {data:fetchedCategories} = useFetch(
    `/api/category?vendor=${vendor || user.vendor}`
  );

  console.log({  vendor, fetchedCategories});

  const [categories, setCategories] = useState<Category[]>(
    Array.isArray(fetchedCategories) ? fetchedCategories : []
  );

  useEffect(() => {
    if (Array.isArray(fetchedCategories)) setCategories(fetchedCategories as Category[]);
  }, [fetchedCategories]);

  if (!Array.isArray(categories)) return <div>No data</div>;

  return (
    <Wrapper
      handleAddBtn={() => setData({ ...globalData, isModalOpen: !isModalOpen })}
      shouldAddBtn={true}
      addBtnLabel="Add Category"
    >
      {/* Headers */}

      <div className="w-full grid grid-cols-4 border-b-2 border-solid bg-[#f9f9ff] font-bold py-3 mx-1 text-sm">
        <span className="overflow-hidden">#</span>

        <span className="overflow-hidden">Name</span>

        {/* <span className="overflow-hidden">Unit</span> */}

        <span className={`overflow-hidden `}>Status</span>
        <span className="overflow-hidden">Edit</span>
      </div>

      {categories.map((p: Category, indx: number) => (
        <div
          key={`${p._id}-${indx}`}
          className="w-full overflow-x-hidden grid grid-cols-4 border-b-2 border-solid hover:bg-[#f9f9ff] py-3 mx-1 text-sm"
        >
          <span className="overflow-hidden">{indx + 1}</span>

          <span className="overflow-hidden">{p.name}</span>

          {/* <span className="overflow-hidden">{p.units}</span> */}

          <span className={`overflow-hidden flex justify-center items-center`}>
            {" "}
            <span
              className={`p-1 rounded-full mx-1 ${
                p.status.toLowerCase().includes("active")
                  ? "bg-green-300"
                  : "bg-red-400"
              }`}
            ></span>
            {" " + strCapitalize(p.status)}
          </span>
          <div className="flex justify-between items-center ">
            <button
              className="border-2 border-solid border-orange-400 px-2 py-2 rounded-md"
              onClick={() => {
                setSelectedCategory(p);
                setData({ ...globalData, isModalOpen: !isModalOpen });
              }}
            >
              {" "}
              <FaEdit className="text-lg text-orange-400" />
            </button>
            <DeleteButton id={p._id!} table="category" />
          </div>
        </div>
      ))}
      {/* {myModal} */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setData({ ...globalData, isModalOpen: !isModalOpen })}
        className=" rounded-none"
      >
        <UniversalFormikForm
          handleSubmit={(values, { resetForm }) => {
            !selectedCategory
              ? postCategory({ ...values, vendor: user.vendor })
              : updateCategory(values, () => {
                  setSelectedCategory(null);
                  resetForm();
                  setData({
                    ...globalData,
                    isModalOpen: !isModalOpen,
                  });
                });
            resetForm();
          }}
          initialValues={selectedCategory ?? { name: "", status: "active" }}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .required("Category name is required")
              .max(20, "Category name must be at most 20 characters"),
            // units: Yup.string().required("Category unit is required"),
            status: Yup.string().oneOf(
              ["active", "pause"],
              "Invalid status selection"
            ),
          })}
        >
          {!selectedCategory ? (
            <AddCategoryForm />
          ) : (
            <EditCategoryForm handleSubmit={() => setSelectedCategory(null)} />
          )}
        </UniversalFormikForm>
      </Modal>
    </Wrapper>
  );
}
