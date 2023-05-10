import React, { useState } from "react";
import { CartContext, RefreshContext } from "../pages/Home";
import { useContext } from "react";
import { CurrentOrderCard } from "./CurrentOrderCard";
import { toast } from "react-hot-toast";

export const CurrentOrder = () => {
  const [cart, setCart] = useContext(CartContext);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [counter, setCounter] = useState(0);

  let totalAmount = 0;

  for (let i = 0; i < cart.length; i++) {
    totalAmount += parseFloat(cart[i].subTotal);
  }

  const removeCartItem = async (e) => {
    const newCart = cart.filter((cartItem) => cartItem._id !== e.target.id);
    setCart(newCart);
  };

  const increaseQuantity = (e) => {
    const cartItem = cart.find((cartItem) => cartItem._id === e.target.id);
    cartItem.quantity += 1;

    cartItem.subTotal =
      parseFloat(cartItem.subTotal) + parseFloat(cartItem.sellingPrice);

    cartItem.subTotal = cartItem.subTotal.toFixed(2);
    setCounter(cartItem.quantity);
  };

  const decreaseQuantity = (e) => {
    const cartItem = cart.find((cartItem) => cartItem._id === e.target.id);
    cartItem.quantity -= 1;
    cartItem.subTotal =
      parseFloat(cartItem.subTotal) - parseFloat(cartItem.sellingPrice);
    cartItem.subTotal = cartItem.subTotal.toFixed(2);

    if (cartItem.quantity === 0) {
      const newCart = cart.filter((cartItem) => cartItem._id !== e.target.id);
      setCart(newCart);
    }
    setCounter(cartItem.quantity);
  };

  const submitOrder = async () => {
    try {
      await fetch("http://127.0.0.1:5001/order/neworder", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          itemsPurchased: cart,
          total: totalAmount,
          paid: true,
        }),
      });

      for (let i = 0; i < cart.length; i++) {
        await fetch(`http://127.0.0.1:5001/stock/updatestock/${cart[i]._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            itemCode: cart[i].itemCode,
            itemName: cart[i].itemName,
            availableStock: cart[i].availableStock - cart[i].quantity,
            sellingPrice: cart[i].sellingPrice,
            purchasePrice: cart[i].purchasePrice,
            imageURL: cart[i].imageURL,
            category: cart[i].category,
            sold: cart[i].sold + cart[i].quantity,
          }),
        });
      }
    } catch (error) {
      console.error(error);
    }
    setCart([]);
    refresh === true ? setRefresh(false) : setRefresh(true);
    toast.success("Order Created");
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
                increaseQuantity={(e) => increaseQuantity(e)}
                decreaseQuantity={(e) => decreaseQuantity(e)}
              />
            ))}
            <div className="h-36 flex flex-col items-center">
              <p className="p-5 w-2/3 items-center bg-green-100 border font-bold border-gray-200 rounded-lg shadow m-2">
                Total Amount: ${((totalAmount * 1000) / 1000).toFixed(2)}
              </p>
              <button
                onClick={() => submitOrder()}
                className="m-2 w-1/2 justify-center focus:outline-none text-white text-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
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
