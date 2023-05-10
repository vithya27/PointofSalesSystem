import React from "react";
import InventoryData from "../components/InventoryData";

import Sidebar from "../components/Sidebar";

export const Inventory = () => {
  return (
    <div className="lg:max-w-6xl mx-auto grid grid-cols-9 max-h-screen">
      <Sidebar />
      <InventoryData />
    </div>
  );
};
