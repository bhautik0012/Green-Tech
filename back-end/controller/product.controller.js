const { asyncHandler } = require("../utils/asyncHandler.js");
const { ApiError } = require("../utils/ApiError.js");
const { uploadOnCloudinary } = require("../utils/cloudinary.js");
const { ApiResponse } = require("../utils/ApiResponse.js");
const mongoose = require("mongoose");
const { Product } = require("../model/product.model.js");

const createProduct = asyncHandler(async (req, res) => {
  const { productName, price } = req.body;

  if ([productName, price].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const solarLocalPath = req.file?.path;

  if (!solarLocalPath) {
    throw new ApiError(400, "solar file is required");
  }

  const solarImage = await uploadOnCloudinary(solarLocalPath);

  if (!solarImage) {
    throw new ApiError(400, "solar file is required");
  }

  const product = await Product.create({
    productName: productName.toLowerCase(),
    solarImage: solarImage.url,
    price,
  });

  if (!product) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, product, "Product Created Successfully"));
});

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  if (!products || products.length === 0) {
    throw new ApiError(404, "No products found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, products, "Products fetched successfully"));
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid product ID");
  }

  const deletedProduct = await Product.findByIdAndDelete(id);

  if (!deletedProduct) {
    throw new ApiError(404, "Product not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, deletedProduct, "Product deleted successfully"));
});


module.exports = {
  createProduct,
  getAllProducts,
  deleteProduct
};
