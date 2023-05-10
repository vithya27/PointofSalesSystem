import React from "react";

export const CurrentOrderCard = ({
  cartItem,
  removeCartItem,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <>
      <div className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow m-2">
        <div key={cartItem._id} className="rounded shadow-lg border-black">
          <img className="w-32" src={cartItem.imageURL} alt="" />
        </div>
        <div className="p-4">
          <div className="font-bold text-xl mb-2">{cartItem.itemName}</div>
          <p className="text-gray-700 text-base">
            Subtotal: ${((cartItem.subTotal * 1000) / 1000).toFixed(2)}
          </p>
          <p className="text-gray-700 text-base">
            Quantity:{" "}
            <button
              id={cartItem._id}
              onClick={decreaseQuantity}
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-5 rounded-l cursor-pointer outline-none"
            >
              -
            </button>{" "}
            {cartItem.quantity}{" "}
            <button
              id={cartItem._id}
              onClick={increaseQuantity}
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-5 rounded-r cursor-pointer"
            >
              +
            </button>
          </p>

          <button
            id={cartItem._id}
            onClick={removeCartItem}
            className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};
