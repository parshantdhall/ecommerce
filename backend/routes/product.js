const router = require("express").Router();
const { getAllProducts, getSingleProduct } = require("../controller/product");

router.get("/", getAllProducts);
router.get("/:pslug", getSingleProduct);

module.exports = router;
