import express from "express";
import {
  registerUser,
  authUser,
  userProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { auth, admin } from "../middleware/authMW.js";

const router = express.Router();

router.route("/").post(registerUser).get(auth, admin, getUsers);
router.post("/login", authUser);
router.route("/profile").get(auth, userProfile).put(auth, updateUserProfile);
router
  .route("/:id")
  .delete(auth, admin, deleteUser)
  .get(auth, admin, getUserById)
  .put(auth, admin, updateUser);

export default router;
