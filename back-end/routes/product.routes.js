const { Router } = require("express");
const { upload } = require("../middlewares/multer.middleware.js");
const {
  createProduct,
  getAllProducts,
  deleteProduct,
} = require("../controllers/product.controller.js");

const { verifyJWT } = require("../middlewares/auth.middleware");

const router = Router();

router.route("/add").post(upload.single("solarImage"), createProduct);
router.route("/get").get(getAllProducts);
router.route("/delete/:id").delete(deleteProduct);

module.exports = router;
