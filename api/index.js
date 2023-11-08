const express = require("express");
const cors = require("cors");
require("dotenv").config();
const Transaction = require("./models/Transaction.js");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test", function (req, res) {
  res.json("test ok");
});

app.post("/api/transaction", async function (req, res) {
  await mongoose.connect(process.env.MONGO_URL);
  const { price, name, description, datetime } = req.body;
  const transaction = await Transaction.create({
    price,
    name,
    description,
    datetime,
  });
  res.json(transaction);
});

app.get("/api/transactions", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const transactions = await Transaction.find();
  res.json(transactions);
});

if (4000) {
  app.listen(4000);
}
module.exports = app;
