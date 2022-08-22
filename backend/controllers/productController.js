import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc  Fetch all Products
// @route  GET /api/products
// @access public (no token required)

const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      } && {
        description: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.send({ products, page, pages: Math.ceil(count / pageSize) });
});

// @desc  Fetch product by ID
// @route  GET /api/products/:id
// @access public (no token required)

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  res.send(product);
});

// @desc  Delete product by ID
// @route  DELETE /api/products/:id
// @access private/admin

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  await product.remove();
  res.send({ message: "Product Removed" });
});

// @desc  Create a product
// @route  POST /api/products
// @access private/admin

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample Name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample Brand",
    category: "Sample Category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample Description",
    team: "Sample Team",
    sizes: ["S", "M", "L", "XL", "XXL"],
  });

  const createdProduct = await product.save();
  res.status(201).send(createdProduct);
});

// @desc  Update a product
// @route  PUT /api/products/:id
// @access private/admin

const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
    team,
    sizes,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  product.name = name;
  product.price = price;
  product.description = description;
  product.image = image;
  product.brand = brand;
  product.team = team;
  product.category = category;
  product.countInStock = countInStock;
  product.sizes = sizes;

  const updatedProduct = await product.save();
  res.status(201).send(updatedProduct);
});

// @desc  Create new review
// @route  POST /api/products/:id/reviews
// @access private

const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  const alreadyReviewed = product.reviews.find(
    (review) => review.user.toString() === req.user._id.toString()
  );

  if (alreadyReviewed) {
    res.status(400);
    throw new Error("Product already reviewed");
  }

  const review = {
    name: req.user.name,
    rating: Number(rating),
    comment,
    user: req.user._id,
  };
  product.reviews.push(review);

  product.numReviews = product.reviews.length;
  product.rating =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;

  await product.save();
  res.status(201).send({ message: "Review added" });
});

// @desc  Get top rated products
// @route  GET /api/products/top
// @access public

const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);
  res.send(products);
});

// @desc  Get products by team name
// @route  GET /api/products/teams/:team
// @access public

const getProductsByTeam = asyncHandler(async (req, res) => {
  const products = await Product.find({ team: req.params.team });
  if (!products) {
    res.send(404);
    throw new Error("No team found");
  }
  res.send(products);
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  getProductsByTeam,
};
