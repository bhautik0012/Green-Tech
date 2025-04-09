const { ApiError } = require("../utils/ApiError.js");
const { asyncHandler } = require("../utils/asyncHandler.js");
const { Order } = require("../models/order.model.js");
const { Product } = require("../models/product.model.js");

const createOrder = asyncHandler(async (req, res) => {
  console.log("===========req.user._id===========", req.user._id);

  const { shippingInfo, orderItems } = req.body;

  // Validate required fields
  if (!shippingInfo || !orderItems || orderItems.length === 0) {
    throw new ApiError(
      400,
      "Shipping info and at least one order item are required"
    );
  }

  console.log("======orderItem===========", orderItems);

  // Validate product existence and stock
  for (const item of orderItems) {
    console.log("========tem.product=====", item.product);

    const product = await Product.findById({ _id: item.product });
    if (!product) {
      throw new ApiError(404, `Product not found: ${item.product}`);
    }
    if (product.stock < item.quantity) {
      throw new ApiError(
        400,
        `Insufficient stock for product: ${product.name}`
      );
    }
  }

  // // Calculate prices
  // const itemsPrice = orderItems.reduce(
  //   (acc, item) => acc + (item.price * item.quantity),
  //   0
  // );

  // const taxPrice = itemsPrice * 0.1; // 10% tax
  // const shippingPrice = itemsPrice > 100 ? 0 : 10; // Free shipping over $100
  // const totalPrice = itemsPrice + taxPrice + shippingPrice;

  // Create order
  const order = await Order.create({
    shippingInfo,
    orderItems,
    user: req.user._id, // Attach the user who created the order
    // paidAt: Date.now()
  });

  // Update product stock
  for (const item of orderItems) {
    await Product.findByIdAndUpdate(
      item.product,
      { $inc: { stock: -item.quantity } },
      { new: true }
    );
  }

  res.status(201).json({
    success: true,
    message: "Order created successfully",
    order,
  });
});

module.exports = { createOrder };

// get Single Order
const getSingleOrder = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return next(new ApiError("Order not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

// get logged in user  Orders
const myOrders = asyncHandler(async (req, res, next) => {
  console.log("===========req============", req.user._id);

  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
});

// get all Orders -- Admin
const getAllOrders = asyncHandler(async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;

  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
});

// update Order Status -- Admin
const updateOrder = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ApiError("Order not found with this Id", 404));
  }

  if (order.orderStatus === "Delivered") {
    return next(new ApiError("You have already delivered this order", 400));
  }

  if (req.body.status === "Shipped") {
    order.orderItems.forEach(async (o) => {
      await updateStock(o.product, o.quantity);
    });
  }
  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);

  product.Stock -= quantity;

  await product.save({ validateBeforeSave: false });
}

const deleteOrder = asyncHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ApiError("Order not found with this Id", 404));
  }

  await order.deleteOne(); // ✅ This is the modern equivalent

  res.status(200).json({
    success: true,
    message: "Order deleted successfully",
  });
});

module.exports = {
  createOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
};
