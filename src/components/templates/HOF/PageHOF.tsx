"use client"
import { useGlobalContext } from "@/context/GlobalContext";
import React, {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  ReactElement,
} from "react";

interface PageHOCProps {
  children: ReactNode;
}

export const PageHOC: React.FC<PageHOCProps> = ({
  children,
}: PageHOCProps) => {
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
