import React from "react";
import { CartContext } from "../pages/Home";
import { useContext } from "react";
import { CurrentOrderCard } from "./CurrentOrderCard";

export const CurrentOrder = () => {
  const [cart, setCart] = useContext(CartContext);

  let totalAmount = 0;

  for (let i = 0; i < cart.length; i++) {
    totalAmount += cart[i].subTotal;
  }

  const removeCartItem = async (e) => {
    const newCart = cart.filter((cartItem) => cartItem._id !== e.target.id);
    setCart(newCart);
  };

  return (
    <>
      <div className="col-span-3 border-x">
        <div className="flex items-center justify-between">
          <h1 className="p-5 pb-0 text-xl font-bold text-center">
            Current Order
          </h1>
        </div>

        {cart.length > 0 ? (
          <>
            {cart.map((cartItem, key) => (
              <CurrentOrderCard
                key={key}
                cartItem={cartItem}
                removeCartItem={(e) => removeCartItem(e)}
              />
            ))}
            <div className="h-36 flex flex-col items-center">
              <p className="p-5 w-2/3 items-center bg-green-100 border font-bold border-gray-200 rounded-lg shadow m-2">
                Total Amount: ${((totalAmount * 1000) / 1000).toFixed(2)}
              </p>
              <button className="m-2 w-1/2 justify-center focus:outline-none text-white text-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Make Payment
              </button>
            </div>
          </>
        ) : (
          <p className="p-5">No item in cart</p>
        )}
      </div>
    </>
  );
};
