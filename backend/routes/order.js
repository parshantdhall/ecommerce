const { getAllOrders } = require("../controller/order");

const router = require("express").Router();

router.get("/", getAllOrders);
// router.get("/:oid", getSingleProduct);

module.exports = router;
