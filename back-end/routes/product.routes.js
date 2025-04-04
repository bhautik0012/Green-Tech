const { Router } = require("express");
const { upload } = require("../middlewares/multer.middleware.js");
const { createProduct } = require("../controller/product.controller.js");

const router = Router();

router.route("/add").post(upload.single("solarImage"), createProduct);

module.exports = router;
