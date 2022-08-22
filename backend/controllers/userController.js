import { response } from "express";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import {
  validateLogin,
  validateRegister,
} from "../validations/userValidation.js";

// @desc  Register user
// @route  POST /api/users/
// @access public (no token required)

const registerUser = asyncHandler(async (req, res) => {
  const { error } = validateRegister(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }
  const { name, email, password } = req.body;

  const existedUser = await User.findOne({ email });

  if (existedUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (!user) {
    res.status(400);
    throw new Error("Invalid user data");
  }
  res.status(201);
  res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

// @desc  Auth user & get token
// @route  POST /api/users/login
// @access public (no token required)

const authUser = asyncHandler(async (req, res) => {
  const { error } = validateLogin(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchedPasswords(password))) {
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: user.generateToken(),
    });
    return;
  }
  res.status(400);
  throw new Error("Invalid email or password");
});

// @desc  Get user profile info
// @route  GET /api/users/profile
// @access private

const userProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

// @desc  Update user profile info
// @route  PUT /api/users/profile
// @access private

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  if (req.body.password) {
    user.password = req.body.password;
  }

  const updatedUser = await user.save();

  res.send({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    isAdmin: updatedUser.isAdmin,
    token: updatedUser.generateToken(),
  });
});

// @desc  Get all users
// @route  GET /api/users
// @access private/admin

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  if (!users) {
    res.status(404);
    throw new Error("No users found");
  }

  res.send(users);
});

// @desc  Delete a user
// @route  DELETE /api/users/:id
// @access private/admin

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  await user.remove();
  res.send({ message: "User removed successfully" });
});

// @desc  Get user by ID
// @route  GET /api/users/:id
// @access private/admin

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.send(user);
});

// @desc  Update user
// @route  PUT /api/users/:id
// @access private/admin

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.isAdmin = req.body.isAdmin;

  const updatedUser = await user.save();

  res.send({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    isAdmin: updatedUser.isAdmin,
  });
});

export {
  authUser,
  userProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
