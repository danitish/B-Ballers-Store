import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// @desc  Create new order
// @route  POST /api/orders
// @access private

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && !orderItems.length) {
    res.status(400);
    throw new Error("No order items");
  }

  const order = new Order({
    orderItems,
    user: req.user._id,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  });

  const createdOrder = await order.save();

  res.status(201).send(createdOrder);
});

// @desc  Get order by ID
// @route  GET /api/orders/:id
// @access private

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }
  res.send(order);
});

// @desc  Update order to paid
// @route  PUT /api/orders/:id/pay
// @access private

const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }

  order.isPaid = true;
  order.paidAt = Date.now();
  order.paymentResult = {
    id: req.body.id,
    status: req.body.status,
    update_time: req.body.update_time,
    email_address: req.body.payer.email_address,
  };

  const updatedOrder = await order.save();
  res.send(updatedOrder);
});

// @desc  Update order to delivered
// @route  PUT /api/orders/:id/deliver
// @access private/admin

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }

  order.isDelivered = true;
  order.deliveredAt = Date.now();

  const updatedOrder = await order.save();
  res.send(updatedOrder);
});

// @desc  Get logged in user orders
// @route  GET /api/orders/myorders
// @access private

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });

  if (!orders) {
    res.status(404);
    throw new Error("No orders were found");
  }

  res.send(orders);
});

// @desc  Get all orders
// @route  GET /api/orders
// @access private/admin

const getOrders = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const count = await Order.countDocuments();
  const orders = await Order.find({})
    .populate("user", "id name")
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  if (!orders) {
    res.status(404);
    throw new Error("No orders were found");
  }

  res.send({ orders, page, pages: Math.ceil(count / pageSize) });
});

export {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
};
