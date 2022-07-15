const Discount = require("../models/discountModel");

exports.getAllDiscounts = async (req, res) => {
  try {
    // EXECUTE QUERY

    const discounts = await Discount.find();

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: discounts.length,
      data: {
        discounts,
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

exports.getDiscount = async (req, res) => {
  try {
    const discount = await Discount.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        discount,
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

exports.createDiscount = async (req, res) => {
  try {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$", req.body);
    const newDiscount = await Discount.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        product: newDiscount,
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

exports.updateDiscount = async (req, res) => {
  try {
    const discount = await Discount.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        discount,
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

exports.deleteDiscount = async (req, res) => {
  try {
    await Discount.findByIdAndDelete(req.params.id);

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
