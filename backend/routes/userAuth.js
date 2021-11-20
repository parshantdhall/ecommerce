const router = require("express").Router();
const userAuthController = require("../controller/userAuth");

router.post("/login", userAuthController.loginUser);

module.exports = router;
