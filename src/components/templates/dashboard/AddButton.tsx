"use client";
import { twMerge } from "tailwind-merge";

interface AddButtonProps {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  type?: "button" | "reset" | "submit";
  labelClasses?: string;
  iconClasses?: string;
  onClick?: () => void;
}

const AddButton = ({
  label = "",
  className = "",
  type = "button",
  onClick = () => "",
}: AddButtonProps) => {
  return (
    <button
      type={type}
      className={twMerge(
        `flex px-6 my-2  justify-center items-center
      py-3 rounded-full bg-gradient-to-r from-yellow-400 to-purple-800
           hover:from-purple-800 hover:to-yellow-400
                text-white font-bold text-lg`,
        className
      )}
      onClick={() => {
        onClick();
      }}
    >
      +{" " + label}
    </button>
  );
};

export default AddButton;
