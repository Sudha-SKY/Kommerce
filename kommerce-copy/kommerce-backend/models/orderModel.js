const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  // order_id: {
  //   type: String,
  //   required: [true, "An order must have an Id"],
  //   unique: true,
  // },
  orderNumber: {
    type: String,
    required: [true, "An order must have a number"],
    unique: true,
  },
  orderedDate: Date,
  paymentStatus: String,
  totalQuantity: Number,
  totalAmount: Number,
  fulfillmentStatus: String,

  billingAddress: {
    name: String,
    email: String,
    phone: String,
    address: String,
    postalCode: String,
  },
  shippingAddress: {
    name: String,
    email: String,
    phone: String,
    address: String,
    postalCode: String,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  products: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
  ],
  discount: {
    type: mongoose.Schema.ObjectId,
    ref: "Discount",
  },
  // products: [
  //   {
  //     productName: String,
  //     productSku: Number,
  //     productPrice: Number,
  //     quantity: String,
  //     discountCode: String,
  //     discountValue: Number,
  //   },
  // ],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

// orders [
//     {
//         order_id,
//         order_no,
//         user_id,
//         billing_address:{
// 		name,
// 		email,
// 		phone,
// 		address,
// 		postal_code
// },
//         shipping_address:{
// 		name,
// 		email,
// 		phone,
// 		address,
// 		postal_code,
// 	}
//         status,
//         orderedDate,
//         products: [{
// product_name,
// product_sku,
// product_price,
// quantity,
// discount_code,
// discount_value,
// }],
//         Totalquantity,
//        totalAmount,
//     }
// ]
