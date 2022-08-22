import express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  getProductsByTeam,
} from "../controllers/productController.js";
import { auth, admin } from "../middleware/authMW.js";

const router = express.Router();

router.route("/").get(getProducts).post(auth, admin, createProduct);
router.get("/top", getTopProducts);
router.get("/teams/:team", getProductsByTeam);
router.route("/:id/reviews").post(auth, createProductReview);
router
  .route("/:id")
  .get(getProductById)
  .delete(auth, admin, deleteProduct)
  .put(auth, admin, updateProduct);

export default router;
