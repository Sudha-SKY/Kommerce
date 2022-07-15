const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const discountRouter = require("./routes/discountRouter");
const orderRouter = require("./routes/orderRouter");
const cartRouter = require("./routes/cartRouter");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

console.log(__dirname);
let z = path.parse(__dirname);
console.log(z);
console.log(z.dir);
// app.use(express.static(path.join(z.dir, "kommerce/public")));

// Development logging
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Mounting the routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/discounts", discountRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/cart", cartRouter);

//any other unavailable http requests
app.all("*", (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server`);
  err.statusCode = 404;
  2;
  err.status = "fail";
  next(err);
});

module.exports = app;
