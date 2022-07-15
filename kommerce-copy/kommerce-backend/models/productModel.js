const mongoose = require("mongoose");
const validator = require("validator");

const productSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: [true, "A product must have a sku id"],
    unique: true,
  },
  productName: {
    type: String,
    required: [true, "A product must have a name"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "A product must have a description"],
    trim: true,
  },
  image: {
    type: String,
    required: [true, "A product must have an image"],
  },
  price: {
    type: Number,
    required: [true, "A product must have a price"],
  },
  discountedPrice: {
    type: Number,
    validate: {
      validator: function (val) {
        // this only points to current doc on NEW document creation
        return val < this.price;
      },
      message: "Discount price ({VALUE}) should be below regular price",
    },
  },
  inventory: {
    type: Number,
    required: [true, "Please specify the inventory"],
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  modifiedAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

// products[
//   {
//     product_id,
//     product_name,
//     product_img,
//     description,
//     sku,
//     price,
//     inventory,
//     status,
//     created_at,
//     modified_at,
//   }
// ];
