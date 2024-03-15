import React, { useEffect, useState } from "react";
import ShoppingCart from "./ShoppingCart";

import { Select } from "@/components";
import { extraProductCategories } from "@/utils/key_functions";
import Modal from "@/components/molecules/Modal";
import ProductCard from "./ProductCard";
import { Product } from "@/types";
import { useGlobalContext } from "@/context/GlobalContext";
import {
  handleAddToCart,
  handleDecrementItem,
  handleIncrementItem,
  handleRemoveFromCart,
} from "@/utils/shoppingCartFuctions";
import { CartItem } from "./types";

export default function Products({
  products,
  handleFilterByCategory,
  activeCategory,
  shopDetails,
}: any) {
  const { data: globalData, setData } = useGlobalContext(),
    { shoppingCart: cartItems, isModalOpen } = globalData;

  const handleToggleCartVisibility = () => {
    setData({
      ...globalData,
      isModalOpen: !isModalOpen,
    });
  };

  useEffect(() => {
    // console.log({ cartItems });
  }, [cartItems]);

  if (!Array.isArray(products)) return <div> The shop is empty </div>;

  return (
    <>
      <div className="w-full px-4  flex  flex-col justify-center items-center mx-auto">
        {/*  Products Filter*/}
        <Select
          className="mx-2"
          value=""
          options={[
            { label: "All Categories", value: "" },
            ...extraProductCategories(products),
          ]}
         
          onChange={(selectedCategory) =>
            handleFilterByCategory(selectedCategory)
          }
        />
        {/*  Products Grid*/}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-2">
          {(activeCategory
            ? products.filter((p: any) => p.category === activeCategory)
            : products
          ).map((prod: Product, indx: number) => (
            <ProductCard
              key={indx}
              index={indx}
              product={prod}
              handleAddToCart={(item: CartItem) =>
                handleAddToCart(item, globalData, setData)
              }
              handleIncrementItem={(indx: number) =>
                handleIncrementItem(indx, globalData, setData)
              }
              handleDecrementItem={(indx: number) =>
                handleDecrementItem(indx, globalData, setData)
              }
              handleRemoveFromCart={(indx: number) =>
                handleRemoveFromCart(indx, globalData, setData)
              }
            />
          ))}
        </div>
      </div>

      {/* Shopping cart here */}
      <Modal isOpen={isModalOpen} onClose={() => handleToggleCartVisibility()}>
        <ShoppingCart shopDetails={shopDetails} />
      </Modal>
    </>
  );
}
