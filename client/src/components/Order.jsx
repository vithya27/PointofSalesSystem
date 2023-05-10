import React from "react";
import { Items } from "./Items";

export const Order = () => {
  return (
    <div className="col-span-4 border-x">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Welcome Jenny, </h1>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="pl-5 pt-2 pb-0 text-md font-semibold">
          Create an order
        </h3>
      </div>
      <div>
        <Items />
      </div>
    </div>
  );
};
