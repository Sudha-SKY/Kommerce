const Order = require("../models/orderModel");

exports.getAllOrders = async (req, res) => {
  try {
    // EXECUTE QUERY

    const orders = await Order.find();
    // console.log(products);
    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: orders.length,
      data: {
        orders,
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

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("products")
      .populate("discount");
    console.log("getOrder from express", order);
    res.status(200).json({
      status: "success",
      data: {
        order,
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

exports.createOrder = async (req, res) => {
  try {
    console.log(req.body);

    const newOrder = await Order.create({
      orderNumber: req.body.orderNumber,
      orderedDate: req.body.orderedDate,
      paymentStatus: req.body.paymentStatus,
      totalquantity: req.body.totalquantity,
      totalAmount: req.body.totalAmount,
      fulfillmentStatus: req.body.fulfillmentStatus,
    });

    res.status(201).json({
      status: "success",
      data: {
        order: newOrder,
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

exports.updateOrder = async (req, res) => {
  try {
    console.log("updateOrder req.body", req.body);
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    // const order = await Order.findByIdAndUpdate(
    //   req.params.id,
    //   {
    //     orderNumber: req.body.orderNumber,
    //     orderedDate: req.body.orderedDate,
    //     paymentStatus: req.body.paymentStatus,
    //     totalquantity: req.body.totalquantity,
    //     totalAmount: req.body.totalAmount,
    //     fulfillmentStatus: req.body.fulfillmentStatus,
    //   },
    //   {
    //     new: true,
    //     runValidators: true,
    //   }
    // );

    res.status(200).json({
      status: "success",
      data: {
        order,
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

exports.deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
