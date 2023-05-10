import React from "react";

export const ItemCard = ({ item, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="max-w-sm rounded shadow-lg border-black"
      >
        <img className="w-full" src={item.imageURL} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.itemName}</div>
          <p className="text-gray-700 text-base">
            ${((item.sellingPrice * 1000) / 1000).toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
};
