const express = require("express");
const router = express.Router();

const {
  seed,
  allStock,
  createStock,
  deleteStock,
  updateStock,
} = require("../controller/stock");

//seed
router.put("/seedstock", seed);

//view all stock
router.get("/allstock", allStock);

//create new stock
router.put("/newstock", createStock);

// delete stock
router.delete("/deletestock", deleteStock);

// update stock
router.patch("/updatestock/:id", updateStock);

module.exports = router;
