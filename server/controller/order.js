const Order = require("../models/order");

const data = require("../seed/order");

// Seed Orders
const seed = async (req, res) => {
  await Order.deleteMany({});
  // await Order.create(data, (err, data) => {
  //   if (err) {
  //     console.error(err.message);
  //     res.status(400).json({ status: "error", message: "seeding error" });
  //   } else {
  //     res.json({ status: "ok", message: "seeding successful" });
  //   }
  // });
};

// View all orders
const allOrders = async (req, res) => {
  const allOrders = await Order.find();

  res.json(allOrders);
};

// Create new order
const createOrder = async (req, res) => {
  const createOrder = new Order({
    itemsPurchased: req.body.itemsPurchased,
    total: req.body.total,
    paid: req.body.paid,
  });

  try {
    await createOrder.save();
    res.json({ status: "ok", message: "saved" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Delete order
const deleteOrder = async (req, res) => {
  try {
    const response = await Order.findByIdAndDelete(req.body._id);
    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Update order
const updateOrder = async (req, res) => {
  const response = await Order.findByIdAndUpdate(req.params.id, {
    itemsPurchased: req.body.itemsPurchased,
    total: req.body.total,
    paid: req.body.paid,
  });

  res.json(response);
};

module.exports = {
  seed,
  allOrders,
  createOrder,
  deleteOrder,
  updateOrder,
};
