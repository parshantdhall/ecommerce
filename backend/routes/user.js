const router = require("express").Router();
const userController = require("../controller/user");
// Get all users
router.get("/", userController.getAllUsers);

module.exports = router;
