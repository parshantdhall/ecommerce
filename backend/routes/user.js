const router = require("express").Router();
const userController = require("../controller/user");
const { checkIfAdmin } = require("../middlewares/checkUserRights");
const { checkUserLoggedIn } = require("../middlewares/is_loggedIn");

// Get all users
router.get("/", checkUserLoggedIn, checkIfAdmin, userController.getAllUsers);
router.post("/register", userController.createUser);
router.get("/:uid", checkUserLoggedIn, userController.getSingleUser);

module.exports = router;
