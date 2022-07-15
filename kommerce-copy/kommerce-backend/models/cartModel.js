const mongoose = require("mongoose");

let cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      trim: true,
      required: true,
      unique: true,
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
      default: "",
      ref: "Discount",
    },
    discountValue: {
      type: String,
      default: "",
    },
    totalQuantity: Number,
  },
  { timestamps: true }
);

// const cartSchema = new mongoose.Schema(
//   {
//     existingItem: [
//       {
//         product: {
//           type: mongoose.Schema.ObjectId,
//           ref: "Product",
//         },
//         // price: Number,
//         totalPrice: Number,
//         quantity: Number,
//         discount: {
//           type: mongoose.Schema.ObjectId,
//           ref: "Discount",
//         },
//       },
//     ],
//     totalQuantity: Number,
//   }
//   // ,
//   // {
//   //   toJSON: { virtuals: true },
//   //   toObject: { virtuals: true },
//   // }
// );

// cartSchema.virtual("posts", {
//   ref: "Product",
//   localField: "product",
//   foreignField: "_id",
// });

// cartSchema.pre(/^find/, function (next) {
//   console.log("middleware");
//   this.populate({
//     path: "product",
//     select: "productName image price inventory",
//   });
//   next();
// });

// cartSchema.pre(/^find/, function (next) {
//   console.log("middleware discount");
//   this.populate({
//     path: "discount",
//     select: "discountPercent",
//   });
//   next();
// });

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
