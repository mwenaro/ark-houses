import { Img, Typography } from "@/components";
import { Product } from "@/types";
import { GlobalData } from "@/types/core";
import { strCapitalize } from "@/utils";
import { FaTrash } from "react-icons/fa";

interface ProductCardProps {
  product: Product;
  index: number;
  handleAddToCart: any;
  handleIncrementItem: any;
  handleDecrementItem: any;
  handleRemoveFromCart: any;
}

export default function ProductCard({
  index,
  product,
  handleAddToCart,
  handleIncrementItem,
  handleDecrementItem,
  handleRemoveFromCart,
}: ProductCardProps) {
  return (
    <div className="w-full flex flex-col gap-2 aspect-w-2 aspect-h-1 shadow-2xl border bg-white px-3 py-2">
      <div className="w-full flex mb-1 h-full">
        <div className="w-1/2 flex justify-center items-center h-full">
          <Img
            src={
              product.img?.includes("default")
                ? `/assets/defaults/${product.img}`
                : product.img?.includes("http")
                ? product.img
                : `/uploads/${product.img}`
            }
            alt={`${product.name}`}
          />
        </div>
        <div className="w-1/2 flex flex-col px-2 gap-2">
          <Typography
            variant="h3"
            className={` text-product-gold font-bold py-2 text-left ${
              product.name.length > 8 ? "text-xl" : "text-2xl"
            }`}
          >
            {strCapitalize(product.name)}
          </Typography>
          <span className="text-black font-bold">Ksh. {product.price}</span>
          <hr className="w-full  border border-t-2" />
          <Typography variant="p" className="text-gray-600 font-light">
            {strCapitalize(product.units)}
          </Typography>
          <Typography
            variant="p"
            className="text-gray-600 font-light overflow-hidden"
          >
            {strCapitalize(product.description.substring(0, 80))}
          </Typography>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        {/*
         </div><div className="w-full col-span-2 grid grid-cols-3  gap-4"> 
            <button
        //       className={" rounded-md bg-product-blue"}
        //       onClick={() => handleIncrementItem(index)}
        //     >
        //       +
        //     </button>
        //     <button
        //       className={" rounded-sm bg-red-500"}
        //       onClick={() => handleDecrementItem(index)}
        //     >
        //       -
        //     </button>

        //     <button
        //       onClick={() => handleRemoveFromCart(index)}
        //       className={
        //         " rounded-md bg-slate-500 flex justify-center items-center"
        //       }
        //     >
        //       <FaTrash className="" />
        //     </button>
        //   </div>
  */}
        <button
          className="mx-auto w-full px-8 py-3 bg-product-blue
   text-white hover:opacity-75 transition duration-75"
          onClick={() => handleAddToCart(product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
