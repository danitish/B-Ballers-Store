import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "../data/users.js";
import products from "../data/products.js";
import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";
import connectDB from "../config/db.js";

dotenv.config();
connectDB();

// Destroy all existing collections fields and import selected ones
const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data imported successfully".green.inverse);
  } catch (error) {
    console.error(`${error}`.red.inverse);
  }
};

//Simply destroy all existing data
const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed successfully".red.inverse);
  } catch (error) {
    console.error(`${error}`.red.inverse);
  }
};

// Be careful when activating these functions, once orders are in, deleting them is bad
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
