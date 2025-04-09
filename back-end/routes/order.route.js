const express = require("express");
const {
  createOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/order.controller");
const router = express.Router();

const { verifyJWT } = require("../middlewares/auth.middleware");

router.route("/order/new").post(verifyJWT, createOrder);

router.route("/order/:id").get(verifyJWT, getSingleOrder);

router.route("/orders/me").get(verifyJWT, myOrders);

router.route("/admin/orders").get(verifyJWT, getAllOrders);

router
  .route("/order/:id")
  .put(verifyJWT, updateOrder)
  .delete(verifyJWT, deleteOrder);

module.exports = router;
