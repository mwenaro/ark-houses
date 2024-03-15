// MyTable.tsx
import React from "react";
import { useGlobalContext } from "@/context/GlobalContext";
import TableRow from "./TableRow";

interface MyTableProps {
  data: Array<{ [key: string]: any }>;
  setSelectedItem: (item: { [key: string]: any }) => void;
  setData: (data: any) => void;
}

const MyTable: React.FC<MyTableProps> = ({
  data,
  setSelectedItem,
  setData,
}) => {
  const { data: globalData } = useGlobalContext();

  if (!Array.isArray(data) || data.length === 0) {
    return <p>No data available.</p>;
  }

  const keys = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {keys.map((key) => (
            <th key={key}>{key}</th>
          ))}
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, indx) => (
          <TableRow
            key={`${item._id || indx}-${indx}`}
            item={item}
            setSelectedItem={setSelectedItem}
            setData={setData}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
