"use client";
import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { GrFormClose } from "react-icons/gr";
import { twMerge } from "tailwind-merge";

interface ModalProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  className?: string;
  modalClasses?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  modalClasses,
}) => {
  const handleClose = () => {
    onClose(!isOpen);
  };
  if (!isOpen) return null;

  return (
    <div
      className={twMerge(
        "fixed inset-0 flex items-center justify-center z-50 overflow-y-auto ",
        className
      )}
    >
      <div className="fixed inset-0 bg-black opacity-50 "></div>
      <div
        className={twMerge(
          `min-w-96 w-fit p-4 bg-white rounded-lg shadow-lg z-10 relative  `,
          modalClasses
        )}
      >
        <div className="flex justify-end absolute right-2 top-2">
          <button
            onClick={() => handleClose()}
            className="text-gray-500 hover:text-red-500 focus:outline-none"
          >
            <GrFormClose size={24} />
          </button>
        </div>

        <div className="mt-4 w-full ">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
