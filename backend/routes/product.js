const router = require("express").Router();
const {
  getAllProducts,
  getSingleProduct,
  getProductSlugs,
} = require("../controller/product");

router.get("/", getAllProducts);
router.get("/productslugs", getProductSlugs);
router.get("/:pslug", getSingleProduct);
module.exports = router;
