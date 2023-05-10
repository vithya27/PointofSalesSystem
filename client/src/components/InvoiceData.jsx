import React from "react";
import { useState, useEffect } from "react";

const InvoiceData = () => {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5001/order/allorders", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setInvoices(data);
      });
  }, []);

  return (
    <div className="col-span-7 border-l">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Welcome Jenny, </h1>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="pl-5 pt-2 pb-0 text-md font-semibold">
          Check your invoices
        </h3>
      </div>
      <table className="text-sm text-centre text-gray-500 m-2 p-2 border overflow-x-scroll w-full">
        <thead className="text-sm text-gray-700 uppercase bg-green-50 p-2">
          <tr>
            <th className="px-3 py-3 border">ID</th>
            <th className="px-3 py-3 border">Items Purchased</th>
            <th className="px-3 py-3 border">Total Paid</th>
            <th className="px-3 py-3 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {invoices &&
            invoices.map((invoice) => (
              <tr key={invoice._id} className="border">
                <td className="px-3 py-3 text-center border">{invoice._id}</td>
                <td className="px-3 py-3 text-center border">
                  {invoice.itemsPurchased.map((item, index) => (
                    <tr>
                      <td>
                        {index + 1}. Item Name: {item.itemName} Quantity:
                        {item.quantity} Subtotal: {item.subTotal}
                      </td>
                    </tr>
                  ))}
                </td>
                <td className="px-3 py-3 text-center border">
                  {invoice.total}
                </td>
                <td className="px-3 py-3 text-center border">
                  {invoice.createdAt}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceData;
