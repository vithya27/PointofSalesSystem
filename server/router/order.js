const express = require("express");
const router = express.Router();

const {
  seed,
  allOrders,
  createOrder,
  deleteOrder,
  updateOrder,
} = require("../controller/order");

//seed
router.put("/seedorders", seed);

//view all orders
router.get("/allorders", allOrders);

//create new order
router.put("/neworder", createOrder);

// delete order
router.delete("/deleteorder", deleteOrder);

// update
router.patch("/updateorder/:id", updateOrder);

module.exports = router;
