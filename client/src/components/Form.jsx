import React from "react";

const Form = ({ handleFormChange, handleSubmit, addNewItem }) => {
  return (
    <div className="p-5 w-full max-w-sm">
      <form className="flex flex-col py-2" onSubmit={handleSubmit}>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Item Name
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          name="itemName"
          required="required"
          placeholder="e.g. Apple"
          onChange={handleFormChange}
          value={addNewItem.itemName}
        />
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Item Code
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          name="itemCode"
          required="required"
          placeholder="e.g. FujiAppleCN"
          onChange={handleFormChange}
          value={addNewItem.itemCode}
        />
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Available Stock
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="number"
          name="availableStock"
          required="required"
          placeholder="e.g. 200"
          onChange={handleFormChange}
          value={addNewItem.availableStock}
        />
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Purchase Price
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="number"
          name="purchasePrice"
          required="required"
          placeholder="e.g. 2.40"
          onChange={handleFormChange}
          value={addNewItem.purchasePrice}
        />
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Selling Price
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="number"
          name="sellingPrice"
          required="required"
          placeholder="e.g. 3.50"
          onChange={handleFormChange}
          value={addNewItem.sellingPrice}
        />
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Quantity Sold
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="number"
          name="sold"
          required="required"
          placeholder="e.g. 5"
          onChange={handleFormChange}
          value={addNewItem.sold}
        />
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Category
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          name="category"
          required="required"
          placeholder="e.g. Fruits"
          onChange={handleFormChange}
          value={addNewItem.category}
        />
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Image URL
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          name="imageURL"
          required="required"
          placeholder="e.g. https://i.imgur.com/cTDTABm.png"
          onChange={handleFormChange}
          value={addNewItem.imageURL}
        />
        <button
          type="submit"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Add Line Item
        </button>
      </form>
    </div>
  );
};

export default Form;
