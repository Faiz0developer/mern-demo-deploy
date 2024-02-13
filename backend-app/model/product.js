const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  product_name: String,
  product_image: String,
  product_price: Number,
  product_description: String,
});

module.exports = mongoose.model("ProductModel", productSchema);
