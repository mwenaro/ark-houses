import { FaPen, FaPencilAlt } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface EditButtonProps{
    className?:string;
   
   iconClasses?:string
   
}

const EditButton = ({className =""}:EditButtonProps) => {
  return (
    <button className={twMerge("bg-transparent hover:bg-dashboard-red rounded-md outline outline-dashboard-red", className)}>
        <FaPencilAlt />
        <FaPen />
    
    </button>
  )
}

export default EditButton