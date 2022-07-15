const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

////////////////////////// Routes ////////////////////////////
router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.uploadProductImage, productController.createProduct);

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.uploadProductImage,productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
