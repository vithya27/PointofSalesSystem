import React from "react";

export const CurrentOrderCard = ({ cartItem }) => {
  {
    console.log(cartItem);
  }
  return (
    <>
      <div className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow m-2">
        <div key={cartItem.id} className="rounded shadow-lg border-black">
          <img className="w-32" src={cartItem.imageURL} alt="" />
        </div>
        <div className="p-4">
          <div className="font-bold text-xl mb-2">{cartItem.itemName}</div>
          <p className="text-gray-700 text-base">
            Subtotal: ${((cartItem.subTotal * 1000) / 1000).toFixed(2)}
          </p>
          <p className="text-gray-700 text-base">
            Quantity: {cartItem.quantity}
          </p>
        </div>
      </div>
    </>
  );
};
