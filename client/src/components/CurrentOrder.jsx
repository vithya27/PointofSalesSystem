import React from "react";

export const CurrentOrder = () => {
  return (
    <div className="col-span-3 border-x">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold text-center">
          Current Order
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="pl-6 pt-2 pb-0 text-md font-semibold">Invoice No.</h3>
      </div>
    </div>
  );
};
