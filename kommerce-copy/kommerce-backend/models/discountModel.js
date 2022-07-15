const mongoose = require("mongoose");
const Product = require("./productModel");

const discountSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: [true, "A discount must have a name"],
  //   unique: true,
  // },
  discountCode: {
    type: String,
    required: [true, "A discount must have a Code"],
    unique: true,
  },

  discountPercent: {
    type: Number,
    required: [true, "A discount percent is a must"],
  },

  activeDate: { createdAt: Date, expireAt: Date },
  status: {
    type: String,
    enum: ["Scheduled", "Active", "Expired"],
    default: "Scheduled",
  },

  timesUsed: Number,
  appliedAll: Boolean,
  products: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
      required: [true, "Discount must associate to a Product!"],
    },
  ],
  // [productId],
});

const Discount = mongoose.model("Discount", discountSchema);

module.exports = Discount;

// {
//   discount_id,
//   code,
//   value,
//   status,
//   active_date: {creted_at, expire_at}
//   time_used,
//   applied_all: false,
//   products: [product_id,]
// }
