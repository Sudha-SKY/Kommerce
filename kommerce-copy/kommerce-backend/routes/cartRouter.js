const express = require("express");
const cartController = require("../controllers/cartController");

const router = express.Router();

////////////////////////// Routes ////////////////////////////
router
  .route("/")
  .get(cartController.getAllCarts)
  .post(cartController.createCart);

router
  .route("/:id")
  .get(cartController.getCart)
  .patch(cartController.updateCart)
  .delete(cartController.deleteCart);

module.exports = router;
