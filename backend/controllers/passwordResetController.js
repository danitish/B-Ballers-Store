import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Token from "../models/tokenModel.js";
import sendEmail from "../utils/sendEmail.js";
import jwt from "jsonwebtoken";
import {
  validateEmail,
  validatePassword,
} from "../validations/userValidation.js";

// @desc  Send password reset email
// @route  POST /api/password-reset/
// @access public

const passwordResetRequest = asyncHandler(async (req, res) => {
  const { error } = validateEmail(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(400);
    throw new Error("No matching user found");
  }

  let token = await Token.findOne({ userId: user._id });
  if (!token) {
    token = await Token.create({
      userId: user._id,
      token: jwt.sign({ id: user._id }, process.env.JWT_SECRET),
    });
  }

  const link = `${process.env.BASE_URL}/reset-password/${user._id}/${token.token}`;
  await sendEmail(user.email, "Password Reset", link);

  res.send("Password reset link is being sent to your email");
});

// @desc  Change user password
// @route  POST /api/password-reset/:userId/:token
// @access public

const resetUserPassword = asyncHandler(async (req, res) => {
  const { error } = validatePassword(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const user = await User.findById(req.params.userId);
  if (!user) {
    res.status(400);
    throw new Error("Invalid link or expired");
  }

  const token = await Token.findOne({
    userId: user._id,
    token: req.params.token,
  });
  if (!token) {
    res.status(400);
    throw new Error("Invalid link or expired");
  }

  user.password = req.body.password;
  await user.save();
  await token.deleteOne({ token: token.token });

  res.send("Password reset successfully");
});

export { passwordResetRequest, resetUserPassword };
