import React from "react";
import { useState, useEffect } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Form from "./Form";
import { toast } from "react-hot-toast";

const InventoryData = () => {
  const [inventory, setInventory] = useState([]);
  const [itemDelete, setItemDelete] = useState("");
  const [addNewItem, setAddNewItem] = useState({
    itemName: "",
    itemCode: "",
    availableStock: 0,
    purchasePrice: 0,
    sellingPrice: 0,
    sold: 0,
    category: "",
    imageURL: "",
  });
  const [edit, setEdit] = useState("");
  const [itemName, setItemName] = useState();
  const [itemCode, setItemCode] = useState();
  const [availableStock, setAvailableStock] = useState();
  const [purchasePrice, setPurchasePrice] = useState();
  const [sellingPrice, setSellingPrice] = useState();
  const [sold, setSold] = useState();
  const [category, setCategory] = useState();
  const [imageURL, setImageURL] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:5001/stock/allstock", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setInventory(data);
      });
  }, [addNewItem, itemDelete, edit]);

  const handleFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newData = { ...addNewItem };
    newData[fieldName] = fieldValue;

    setAddNewItem(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(addNewItem);

    await fetch("http://127.0.0.1:5001/stock/newstock", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        itemCode: addNewItem.itemCode,
        itemName: addNewItem.itemName,
        availableStock: addNewItem.availableStock,
        sellingPrice: addNewItem.sellingPrice,
        purchasePrice: addNewItem.purchasePrice,
        imageURL: addNewItem.imageURL,
        category: addNewItem.category,
        sold: addNewItem.sold,
      }),
    });

    setAddNewItem({
      itemName: "",
      itemCode: "",
      availableStock: 0,
      purchasePrice: 0,
      sellingPrice: 0,
      sold: 0,
      category: "",
      imageURL: "",
    });

    toast.success("Item Created", { duration: 2000 });
  };

  const handleDelete = async (id) => {
    await fetch(`http://127.0.0.1:5001/stock/deletestock`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    }).then((res) => {
      return res.json();
    });
    setItemDelete(id);
    toast.error("Item Deleted", { duration: 2000 });
  };

  const handleEdit = (id) => {
    setEdit(id);
    const item = inventory.find((item) => item._id === id);
    setItemName(item.itemName);
    setItemCode(item.itemCode);
    setAvailableStock(item.availableStock);
    setPurchasePrice(item.purchasePrice);
    setSellingPrice(item.sellingPrice);
    setSold(item.sold);
    setCategory(item.category);
    setImageURL(item.imageURL);
  };

  const handleUpdate = async () => {
    await fetch(`http://127.0.0.1:5001/stock/updatestock/${edit}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        itemName,
        itemCode,
        availableStock,
        purchasePrice,
        sellingPrice,
        sold,
        category,
        imageURL,
      }),
    }).then((res) => {
      return res.json();
    });
    setEdit("");
    toast.success("Item Updated", { duration: 2000 });
  };

  return (
    <div className="col-span-7 border-l">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Welcome Jenny, </h1>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="pl-5 pt-2 pb-0 text-md font-semibold">
          Check your inventory
        </h3>
      </div>
      <table className="text-sm text-centre text-gray-500 m-2 p-2 border overflow-x-scroll w-96">
        <thead className="text-sm text-gray-700 uppercase bg-green-50 p-2">
          <tr>
            <th className="px-3 py-3 border">Name</th>
            <th className="px-3 py-3 border">Item Code</th>
            <th className="px-3 py-3 border">Available Stock</th>
            <th className="px-3 py-3 border">Purchase Price</th>
            <th className="px-3 py-3 border">Selling Price</th>
            <th className="px-3 py-3 border">Quantity Sold</th>
            <th className="px-3 py-3 border">Category</th>
            <th className="px-3 py-3 border">Image</th>
            <th className="px-3 py-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory &&
            inventory.map((item) =>
              item._id === edit ? (
                <tr key={item._id} className="border">
                  <td className="px-3 py-3 text-center border">
                    <input
                      type="text"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                    ></input>
                  </td>
                  <td className="px-3 py-3 text-center border">
                    <input
                      type="text"
                      value={itemCode}
                      onChange={(e) => setItemCode(e.target.value)}
                    ></input>
                  </td>
                  <td className="px-3 py-3 text-center border">
                    <input
                      type="number"
                      value={availableStock}
                      onChange={(e) => setAvailableStock(e.target.value)}
                    ></input>
                  </td>
                  <td className="px-3 py-3 text-center border">
                    <input
                      type="number"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(e.target.value)}
                    ></input>
                  </td>
                  <td className="px-3 py-3 text-center border">
                    <input
                      type="number"
                      value={sellingPrice}
                      onChange={(e) => setSellingPrice(e.target.value)}
                    ></input>
                  </td>
                  <td className="px-3 py-3 text-center border">
                    <input
                      type="number"
                      value={sold}
                      onChange={(e) => setSold(e.target.value)}
                    ></input>
                  </td>
                  <td className="px-3 py-3 text-center border">
                    <input
                      type="text"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    ></input>
                  </td>
                  <td className="px-3 py-3 text-center border">
                    <input
                      type="text"
                      value={imageURL}
                      onChange={(e) => setImageURL(e.target.value)}
                    ></input>
                  </td>
                  <td>
                    <button
                      onClick={handleUpdate}
                      className="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-2 m-2"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={item._id} className="border">
                  <td className="px-3 py-3 text-center border">
                    {item.itemName}
                  </td>
                  <td className="px-3 py-3 text-center border">
                    {item.itemCode}
                  </td>
                  <td className="px-3 py-3 text-center border">
                    {item.availableStock}
                  </td>
                  <td className="px-3 py-3 text-center border">
                    {item.purchasePrice}
                  </td>
                  <td className="px-3 py-3 text-center border">
                    {item.sellingPrice}
                  </td>
                  <td className="px-3 py-3 text-center border">{item.sold}</td>
                  <td className="px-3 py-3 text-center border">
                    {item.category}
                  </td>
                  <td className="px-3 py-3 text-center border">
                    <img
                      className="w-10"
                      src={item.imageURL}
                      alt={item.itemName}
                    />
                  </td>
                  <td className="px-3 py-3 text-center border">
                    <button>
                      <PencilIcon
                        className="h-6 w-6 text-blue-500 cursor-pointer"
                        onClick={() => handleEdit(item._id)}
                      />
                    </button>
                    <button>
                      <TrashIcon
                        className="h-6 w-6 text-red-500 cursor-pointer"
                        onClick={() => handleDelete(item._id)}
                      />
                    </button>
                  </td>
                </tr>
              )
            )}
        </tbody>
      </table>

      <h2 className="pl-5 pt-2 pb-0 text-md font-semibold">
        Add New Line Item
      </h2>
      <Form
        handleFormChange={handleFormChange}
        handleSubmit={handleSubmit}
        addNewItem={addNewItem}
      />
    </div>
  );
};

export default InventoryData;
