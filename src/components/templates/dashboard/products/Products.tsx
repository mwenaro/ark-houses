"use client"
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import { Wrapper } from "@/components/templates/dashboard/main";
import { Category, Product } from "@/types";
import { fetchData } from "@/utils";
import { strCapitalize } from "@/utils/str_functions";
import AddProductModal from "./AddProductModal";
import { ProductPageWrapper } from "./ProductPageWrapper";
import { DeleteButton, Img } from "@/components";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/context/GlobalContext";
import { useSearchParams } from "next/navigation";
export default function ProductPage({ vendor, params }: any) {
  const [categories, setCategories] = useState<Category[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const { data: globalData, setData } = useGlobalContext()
  const searchParams = useSearchParams()

  useEffect(() => {

    (async () => {
      try {
        const [fectchedCategories, fetchProducts] = await Promise.all([
          fetchData(`/api/category?vendor=${searchParams.get('owner')||vendor}`),
          fetchData(`/api/product?vendor=${searchParams.get('owner')||vendor}`)
        ]);

        setCategories(fectchedCategories)
        setProducts(fetchProducts)
      } catch (error: any) {
        console.log({ error: error.message })
      }

    })()
  })

  if (!products) return <div>No products</div>;
  return (
    <ProductPageWrapper>
      <Wrapper shouldAddBtn={true}>
        {/* Headers */}

        <div className="w-full overflow-x-hidden grid grid-cols-6 md:grid-cols-10 border-b-2 border-solid bg-[#f9f9ff] font-bold py-3 mx-1 text-sm">
          <span className="overflow-hidden">#</span>
          <span className="overflow-hidden">Image</span>
          <span className="overflow-hidden hidden md:flex">Name</span>
          <span className="overflow-hidden hidden md:flex ">Category</span>
          <span className="overflow-hidden col-span-2 hidden md:flex">Description</span>
          <span className="overflow-hidden hidden md:flex">Unit</span>
          <span className="overflow-hidden">Price</span>
          <span className="overflow-hidden">Status</span>
          <span className="overflow-hidden">Edit</span>
        </div>

        {products.map((p: Product, indx: number) => (
          <div
            key={`${p._id}-${indx}`}
            className="w-full overflow-x-hidden grid  grid-cols-6 md:grid-cols-10  border-b-2 border-solid hover:bg-[#f9f9ff] py-3 mx-1 text-sm place-content-center"
          >
            <span className="overflow-hidden">{indx + 1}</span>
            <span className="overflow-hidden "><Img src={p.img?.includes('http')?p.img :`/uploads/${p.img!}`} alt={p.name} className={'w-10'} /></span>
            <span className="overflow-hidden ">{p.name}</span>
            <span className="overflow-hidden hidden md:flex">{p.category}</span>
            <span className="overflow-hidden col-span-2 text-clip hidden md:flex">
              {p.description}
            </span>
            <span className="overflow-hidden hidden md:flex">{p.units}</span>
            <span className="overflow-hidden">{p.price}</span>
            <span
              className={`overflow-hidden flex justify-center items-center`}
            >
              {" "}
              <span
                className={`p-1 rounded-full mx-1 ${p.status.toLowerCase().includes("active")
                  ? "bg-green-300"
                  : "bg-red-400"
                  }`}
              ></span>
              {" " + strCapitalize(p.status)}
            </span>
            <div className="flex justify-between items-center ">
              <button
                onClick={
                  () => {
                    setSelectedProduct(p);
                    setData({ ...globalData, isModalOpen: !globalData.isModalOpen });
                  }
                }
                className="border-2 border-solid border-orange-400 px-2 py-2 rounded-md">
                {" "}
                <FaEdit className="text-lg text-orange-400" />
              </button>

              <DeleteButton id={p._id!} table="product" />
            </div>
          </div>
        ))}
        <AddProductModal categories={categories} selectedProduct={selectedProduct} />
      </Wrapper>
    </ProductPageWrapper>
  );
}
