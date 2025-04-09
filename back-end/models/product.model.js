const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  solarImage: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
