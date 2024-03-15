import { MyDiv } from "@/components";
import { useState } from "react";

export default function useModal() {
  const [isVisible, setVisible] = useState(true);
  const myModal = !isVisible ? (
    ""
  ) : (
    <MyDiv className="z-100 inset-0 top-0 left-0  absolute w-full min-h-fit h-screen bg-gray-600 bg-opacity-10 flex justify-center items-center">
      <div className="mx-auto max-w-md my-auto bg-white  relative flex justify-center items-center w-[500px">
        <button className="absolute -right-2 -top-2 text-red-500">X</button>
        <h3>Helo there</h3>
      </div>
    </MyDiv>
  );


  return {
    setVisible,
    isVisible,
    myModal
  }
}
