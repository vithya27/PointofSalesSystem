const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema(
  {
    itemCode: { type: String, required: true },
    itemName: { type: String, required: true },
    availableStock: { type: Number, required: true },
    sellingPrice: { type: String, required: true },
    purchasePrice: { type: String, required: true },
    imageURL: { type: String, required: true },
    category: { type: String, required: true },
    sold: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Stock = mongoose.model("Stock", StockSchema);

module.exports = Stock;
