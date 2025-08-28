const { authenticated } = require("../Middlewares/autherizations");
const { protect } = require("../Controllers/authrizationController");

const router = require("express").Router();

router.get("/", authenticated, protect);

module.exports = router;
