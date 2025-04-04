const { Router } = require("express");
const { upload } = require("../middlewares/multer.middleware.js");
const {
  createProduct,
  getAllProducts,
  deleteProduct,
} = require("../controller/product.controller.js");

const router = Router();

router.route("/add").post(upload.single("solarImage"), createProduct);
router.route("/get").get(getAllProducts);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
