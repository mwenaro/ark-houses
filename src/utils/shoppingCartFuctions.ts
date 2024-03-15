import { GlobalData } from "@/types/core";

export const handleAddToCart = (
  item: {
    name: string;
    price: number;
    unit?: string;
  },
  globalData: GlobalData,
  callback: any
) => {
  const productIndex = globalData.shoppingCart.findIndex(
    (p: any) => p.name == item.name
  );
  if (productIndex === -1) {
    return callback({
      ...globalData,
      shoppingCart: [
        ...globalData.shoppingCart,
        { name: item.name, quantity: 1, price: item.price },
      ],
    });
  }

  //Increment Item
  const updatedItems = globalData.shoppingCart;
  updatedItems[productIndex].quantity += 1;

  callback({
    ...globalData,
    shoppingCart: updatedItems,
  });
};

export const handleRemoveFromCart = (
  index: number,
  globalData: GlobalData,
  callback: any
) => {
  const updatedCart = [...globalData.shoppingCart];
  updatedCart.splice(index, 1);
  callback({
    ...globalData,
    shoppingCart: updatedCart,
  });
};

export const handleIncrementItem = (
  index: number,
  globalData: GlobalData,
  callback: any
) => {
  const updatedCart = [...globalData.shoppingCart];
  updatedCart[index].quantity += 1;
  callback({
    ...globalData,
    shoppingCart: updatedCart,
  });
};

export const handleDecrementItem = (
  index: number,
  globalData: GlobalData,
  callback: any
) => {
  const updatedCart = [...globalData.shoppingCart];
  if (updatedCart[index].quantity > 1) {
    updatedCart[index].quantity -= 1;
    if (updatedCart[index].quantity < 1) updatedCart.splice(index, 1);

    callback({
      ...globalData,
      shoppingCart: updatedCart,
    });
  }
};
