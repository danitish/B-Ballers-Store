import express from "express";
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} from "../controllers/orderController.js";
import { auth, admin } from "../middleware/authMW.js";

const router = express.Router();

router.route("/").post(auth, addOrderItems).get(auth, admin, getOrders);
router.route("/myorders").get(auth, getMyOrders);
router.route("/:id").get(auth, getOrderById);
router.route("/:id/pay").put(auth, updateOrderToPaid);
router.route("/:id/deliver").put(auth, admin, updateOrderToDelivered);

export default router;
