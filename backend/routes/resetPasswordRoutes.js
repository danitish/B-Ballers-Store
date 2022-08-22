import express from "express";
import {
  passwordResetRequest,
  resetUserPassword,
} from "../controllers/passwordResetController.js";

const router = express.Router();

router.route("/").post(passwordResetRequest);
router.route("/:userId/:token").post(resetUserPassword);

export default router;
