const Cart = require("../models/cartModel");

exports.getAllCarts = async (req, res) => {
  try {
    // EXECUTE QUERY

    const carts = await Cart.find();

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: carts.length,
      data: {
        carts,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id)
      .populate("user")
      .populate("products")
      .populate("discount");

    res.status(200).json({
      status: "success",
      data: {
        cart,
      },
    });
  } catch (err) {
    console.log("err", err);
    res.status(404).json({
      status: "fail",
      message: { err },
    });
  }
};

exports.createCart = async (req, res) => {
  try {
    const newCart = await Cart.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        cart: newCart,
      },
    });
  } catch (err) {
    console.log("err", err);
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateCart = async (req, res) => {
  try {
    console.log(req.body);
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log("cart", cart);
    res.status(200).json({
      status: "success",
      data: {
        cart: cart,
      },
    });
  } catch (err) {
    console.log("err", err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    console.log(err);
    Fget;
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
