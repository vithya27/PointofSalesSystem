import React from "react";
import InvoiceData from "../components/InvoiceData";
import Sidebar from "../components/Sidebar";

const Invoices = () => {
  return (
    <div className="lg:max-w-6xl mx-auto grid grid-cols-9 max-h-screen">
      <Sidebar />
      <InvoiceData />
    </div>
  );
};

export default Invoices;
