const router = require("express").Router();
const { getAllProducts } = require("../controller/product");

router.get("/", getAllProducts);

module.exports = router;
