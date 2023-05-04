const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    itemsPurchased: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        subtotal: { type: Number, required: true },
      },
    ],
    total: {type: Number, required: true},
    paid: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
