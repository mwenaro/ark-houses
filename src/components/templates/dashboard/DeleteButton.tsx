"use client";
import { deleteById } from "@/utils";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { twMerge } from "tailwind-merge";

interface DeleteButtonProps {
  className?: string;
  id: string | number;
  table: string;
  iconClasses?: string;
  title?: string;
}

const DeleteButton = ({
  className = "",
  id,
  table,
  title = "",
}: DeleteButtonProps) => {
  const router = useRouter();
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          let res = await deleteById(`/api/${table}/${id}`);
          if (!res.success)
            throw new Error(`Delete operation failed. Try gain`);

          Swal.fire("Deleted!", `${title} Successfully deleted.`, "success");
        } catch (error: any) {
          Swal.fire("Error", error.message, "error");
          console.log({ error: error.message });
        }
      }
    });
    router.refresh();
  };
  return (
    <button
      onClick={() => handleDelete()}
      className={twMerge("bg-transparent  rounded-md", className)}
    >
      <FaTrash className="text-red-600" />
    </button>
  );
};

export default DeleteButton;
