const Product = require("../models/productModel");
const multer = require("multer");
const path = require("path");

exports.getAllProducts = async (req, res) => {
  try {
    // EXECUTE QUERY

    const products = await Product.find();
    // console.log(products);
    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        products,
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

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log("getProduct from express", product);
    res.status(200).json({
      status: "success",
      data: {
        product,
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
exports.createProduct = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file.originalname);
    console.log(req.file);
    const newProduct = await Product.create({
      image: path.join("../images/", req.file.originalname),
      productName: req.body.productName,
      sku: req.body.sku,
      price: req.body.price,
      inventory: req.body.inventory,
      status: req.body.status,
      description: req.body.description,
    });
    // const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        product: newProduct,
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

exports.updateProduct = async (req, res) => {
  try {
    console.log("updateProduct req.body", req.body);
    console.log("updateProduct req.file", req.file);
    let body;
    if (req.file) {
      body = {
        image: path.join("../images/", req.file.originalname),
        productName: req.body.productName,
        sku: req.body.sku,
        price: req.body.price,
        inventory: req.body.inventory,
        status: req.body.status,
        description: req.body.description,
      };
    } else {
      body = {
        productName: req.body.productName,
        sku: req.body.sku,
        price: req.body.price,
        inventory: req.body.inventory,
        status: req.body.status,
        description: req.body.description,
      };
    }
    const product = await Product.findByIdAndUpdate(req.params.id, body, {
      new: true,
      runValidators: true,
    });

    // const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });

    res.status(200).json({
      status: "success",
      data: {
        product,
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

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

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

//To specify the storage file location
const multerStorage = multer.diskStorage({
  destination: (req, file, callBack) => {
    // callBack(null, "public/images");
    callBack(null, "C:/CODEM/kommerce project/kommerce/public/images");
    // callBack(null, "./../kommerce/public/images");
  },
  filename: (req, file, callBack) => {
    const ext = file.mimetype.split("/")[1];
    //user-userID-date.ext
    //null is for extension
    // callBack(null, `user-${req.user.id}-${Date.now()}.${ext}`);
    console.log("file.originalname", file.originalname);
    callBack(null, `user-${Date.now()}-${file.originalname}`);
  },
});

//multer expects an options object
const upload = multer({
  storage: multerStorage,
  // fileFilter: multerFilter
});

exports.uploadProductImage = upload.single("image");
