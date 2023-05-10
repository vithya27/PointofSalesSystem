const Stock = require("../models/stock");

const data = require("../seed/stock");

// Seed Stock Data
const seed = async (req, res) => {
  await Stock.deleteMany({});
  await Stock.create(data, (err, data) => {
    if (err) {
      console.error(err.message);
      res.status(400).json({ status: "error", message: "seeding error" });
    } else {
      res.json({ status: "ok", message: "seeding successful" });
    }
  });
};

// View all stocks
const allStock = async (req, res) => {
  const allStock = await Stock.find();

  res.json(allStock);
};

// Create new line item
const createStock = async (req, res) => {
  const createStock = new Stock({
    itemCode: req.body.itemCode,
    itemName: req.body.itemName,
    availableStock: req.body.availableStock,
    sellingPrice: req.body.sellingPrice,
    purchasePrice: req.body.purchasePrice,
    imageURL: req.body.imageURL,
    category: req.body.category,
    sold: req.body.sold,
  });

  try {
    await createStock.save();
    res.json({ status: "ok", message: "saved" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Delete line item
const deleteStock = async (req, res) => {
  try {
    const response = await Stock.findByIdAndDelete(req.body._id);
    res.json({ status: "ok", message: "deleted" });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Update Stock
const updateStock = async (req, res) => {
  const response = await Stock.findByIdAndUpdate(req.params.id, {
    itemCode: req.body.itemCode,
    itemName: req.body.itemName,
    availableStock: req.body.availableStock,
    sellingPrice: req.body.sellingPrice,
    purchasePrice: req.body.purchasePrice,
    imageURL: req.body.imageURL,
    category: req.body.category,
    sold: req.body.sold,
  });
  console.log(response);

  res.json(response);
};

module.exports = {
  seed,
  allStock,
  createStock,
  deleteStock,
  updateStock,
};
