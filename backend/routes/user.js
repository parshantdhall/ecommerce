const router = require("express").Router();
const userController = require("../controller/user");
// Get all users
router.get("/", userController.getAllUsers);
router.post("/register", userController.createUser);

module.exports = router;
