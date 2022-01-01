const { getAllOrders } = require("../controller/order");
const { checkIfAdmin } = require("../middlewares/checkUserRights");
const { checkUserLoggedIn } = require("../middlewares/is_loggedIn");

const router = require("express").Router();

// only admin can access all the orders
router.get("/", checkUserLoggedIn, checkIfAdmin, getAllOrders);
// router.get("/:oid", getSingleOrder);

module.exports = router;
