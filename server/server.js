require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./db/db");
const order = require("./router/order");
const stock = require("./router/stock")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB(process.env.MONGODB_URI);

app.use("/order", order);
app.use("/stock", stock);

const PORT = process.env.PORT || 5001;
app.listen(PORT);
