// TableRow.tsx
import React from "react";
import { FaEdit } from "react-icons/fa";
import { DeleteButton } from "@/components";
import { useGlobalContext } from "@/context/GlobalContext";


interface TableRowProps {
  item: { [key: string]: any };
  setSelectedItem: (item: { [key: string]: any }) => void;
  setData: (data: any) => void;
}

const TableRow: React.FC<TableRowProps> = ({ item, setSelectedItem, setData }) => {
  const { data: globalData } = useGlobalContext();
  const keys = Object.keys(item);

  return (
    <tr>
      {keys.map((key) => (
        <td key={key}>{item[key]}</td>
      ))}

      <td>
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              setSelectedItem(item);
              setData({
                ...globalData,
                isModalOpen: !globalData.isModalOpen,
              });
            }}
            className="border-2 border-solid border-orange-400 px-2 py-2 rounded-md"
          >
            <FaEdit className="text-lg text-orange-400" />
          </button>

          <DeleteButton id={item._id} table="town" />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
