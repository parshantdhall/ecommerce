const router = require("express").Router();
const {
  getAllCategories,
  getSingleCategory,
} = require("../controller/category");

router.get("/", getAllCategories);
router.get("/:catid", getSingleCategory);

module.exports = router;
