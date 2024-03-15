"use client";
import { strCapitalize } from "@/utils";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { User } from "@/types/core";
import { useGlobalContext } from "@/context/GlobalContext";
import {
  handleDecrementItem,
  handleIncrementItem,
  handleRemoveFromCart,
} from "@/utils/shoppingCartFuctions";
const customerFields = [
  { label: "Name", name: "name", type: "text" },
  { label: "Phone", name: "phone", type: "text" },
  { label: "Location", name: "location", type: "text" },
];

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface ShoppingCartProps {
  shopDetails: User | null;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ shopDetails }) => {
  const { data: globalData, setData } = useGlobalContext(),
    { shoppingCart: cartItems } = globalData;

  const [customer, setCustomer] = useState<{
    name: string;
    phone: string;
    location: string;
  }>({ name: "", phone: "", location: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  // console.log({ shopDetails });
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total: number, item: CartItem) => total + item.price * item.quantity,
      0
    );
  };
  const generateWhatsAppMessage = (phoneNumber: string) => {
    const itemsMessage = cartItems.map((item: CartItem) => {
      const subtotal = (item.price * item.quantity).toFixed(2);
      return `${item.name} (x${item.quantity}) - KES ${subtotal}`;
    });
    /*
Let's change it to this ...👇🏻



odasasa.com

New order request

Fresh pineapple (×1) - KES 80
Fresh Avocados (×1) - KES 30 
Mahragwe (×1) - KES 120
Dengu Nzima (×1) - KES 140
Mazie Seeds (×2) - KES 300

Total: KES 670

My details:
Mubarak Abdalla
0727654531
Ground floor,CBA building.
 
*/
    // 🛒 Shopping Cart 🛒\n
    const customerDetails = `*My Details:*\n${strCapitalize(
      customer?.name!
    )}\n${strCapitalize(customer?.phone!)}\n${strCapitalize(
      customer?.location!
    )}`;
    const totalMessage = `Total : KES ${calculateTotalAmount().toFixed(2)}`;

    // Combine the individual item messages and the total message with line breaks and separators
    const message = `odasasa.com\n\nNew order request\n${itemsMessage.join(
      "\n"
    )}\n\n${totalMessage}\n\n${customerDetails}\n`;
    // Encode the message and phone number for use in the WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${
      shopDetails?.whatsappNumber || phoneNumber
    }?text=${encodedMessage}`;

    return whatsappURL;
  };

  const customerForm = (
    <div className="px-2 md:px-6 w-full">
      {cartItems.length > 0 &&
        customerFields.map((field) => (
          <div key={field.name} className="my-2 md:my-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              onChange={handleChange}
              required={true}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        ))}
    </div>
  );
  return (
    <div className="shopping-cart">
      {/* <h2>Shopping Cart</h2> */}
      {cartItems.length === 0 ? (
        <p className="w-full h-full flex justify-center items-center">
          Your cart is empty.
        </p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item: CartItem, index: number) => (
              <li
                key={index}
                className="w-full grid grid-cols-5 gap-3 mb-1 border-b p-2"
              >
                <span className=" col-span-2">
                  {item.name} x {item.quantity}
                </span>
                <span>KES. {item.price * item.quantity}</span>
                <div className="col-span-2 grid grid-cols-3 ">
                  <button
                    className={" rounded-md bg-product-blue"}
                    onClick={() =>
                      handleIncrementItem(index, globalData, setData)
                    }
                  >
                    +
                  </button>
                  <button
                    className={" rounded-sm bg-red-500"}
                    onClick={() =>
                      handleDecrementItem(index, globalData, setData)
                    }
                  >
                    -
                  </button>

                  <button
                    onClick={() =>
                      handleRemoveFromCart(index, globalData, setData)
                    }
                    className={
                      " rounded-md bg-slate-500 flex justify-center items-center"
                    }
                  >
                    <FaTrash className="" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-amount font-bold text-xl">
            <span>Total Amount:</span>
            <span>KES. {calculateTotalAmount()}</span>
            <br />
            {customerForm}
            {
              <button
                // disabled ={Object.values(customer).includes("")}
                onClick={() => {
                  if (Object.values(customer).includes(""))
                    return Swal.fire("Fill Customer Details");
                  window
                    .open(
                      generateWhatsAppMessage(
                        shopDetails?.whatsappNumber || "254727654531"
                      ),
                      "_blank"
                    )
                    ?.focus();
                }}
                className="px-2 py-1 bg-green-500 text-white rounded"
              >
                Share on WhatsApp
              </button>
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
