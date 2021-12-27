const router = require("express").Router();
const { getAllProducts, getSingleProduct } = require("../controller/product");

router.get("/", getAllProducts);
router.get("/:pid", getSingleProduct);

module.exports = router;
