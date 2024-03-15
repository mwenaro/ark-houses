import { MyDiv } from "@/components";
import { useGlobalContext } from "@/context/GlobalContext";
import { FaShoppingCart } from "react-icons/fa";

interface ShoppingCartNotification {}

export default function ShoppingCartNotification({}: ShoppingCartNotification) {
  const { data, setData } = useGlobalContext(),
    { shoppingCart: cart, isModalOpen } = data;

  //close Cart
  const handleToggleCartVisibility = () => {
    setData({
      ...data,
      isModalOpen: !isModalOpen,
    });
  };

  return (
    <MyDiv className=" relative ">
      <button onClick={() => handleToggleCartVisibility()}>
        <FaShoppingCart className={"text-2xl"} />
        <span className="absolute text-red-500 w-1 h-1  rounded-full text-lg flex justify-center items-center top-0 right-0 font-extrabold">
          {cart.length}
        </span>
      </button>
    </MyDiv>
  );
}
