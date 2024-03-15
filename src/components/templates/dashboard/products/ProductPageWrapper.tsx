"use client"
import { useGlobalContext } from "@/context/GlobalContext";
import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  ReactElement,
} from "react";

interface ProductPageWrapperProps {
  children: ReactNode;
}

export const ProductPageWrapper: React.FC<ProductPageWrapperProps> = ({
  children,
}: ProductPageWrapperProps) => {
  const { data: globalData, setData: setGlobalData } = useGlobalContext();

  return (
    <>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return null;

        return cloneElement(child as ReactElement, {
          ...(child as ReactElement).props,
          handleAddBtn: () => {
            setGlobalData({
              ...globalData,
              isModalOpen: !globalData?.isModalOpen,
            });
          },
          globalData,
          setGlobalData,
        });
      })}
    </>
  );
};
