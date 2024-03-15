"use client";
import { twMerge } from "tailwind-merge";

interface AddButtonProps {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  type?:"button" | "reset" | "submit";
  labelClasses?: string;
  iconClasses?: string;
  onClick?: () => void;
}

const AddButton = ({
  label="",
  className = "",
  type ="button",
  onClick = () => "",
}: AddButtonProps) => {

  return (
    <button
    type={type}
      className={twMerge(
        `flex px-6 my-2  justify-center items-center
      py-3 rounded-full bg-gradient-to-r from-dashboard-btn_green to-dashboard-btn_green_end
           hover:from-dashboard-btn_green_end hover:to-dashboard-btn_green
                text-white font-bold text-lg`,
        className
      )}
      onClick={() => {onClick()}}
    >
      +{" " + label}
    </button>
  );
};

export default AddButton;
