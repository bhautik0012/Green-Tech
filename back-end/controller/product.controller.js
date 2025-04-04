const { asyncHandler } = require("../utils/asyncHandler.js");
const { ApiError } = require("../utils/ApiError.js");
const { uploadOnCloudinary } = require("../utils/cloudinary.js");
const { ApiResponse } = require("../utils/ApiResponse.js");
const mongoose = require("mongoose");
const { Product } = require("../model/product.model.js");

const createProduct = asyncHandler(async (req, res) => {
  const { productName, price } = req.body;

  console.log("==========productName==========", productName);

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

module.exports = { createProduct };
