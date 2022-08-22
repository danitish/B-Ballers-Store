import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import path from "path";
import morgan from "morgan";

import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import resetPWRoutes from "./routes/resetPasswordRoutes.js";

import { errorHandler, notFound } from "./middleware/errorMW.js";

dotenv.config();
connectDB();

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/uploads", uploadRoutes);
app.use("/api/password-reset", resetPWRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Connected as ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
