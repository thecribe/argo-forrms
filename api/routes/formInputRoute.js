const express = require("express");
const { formInputHandler } = require("../controllers/formInput");
const router = express.Router();

router.route("/").get(formInputHandler);

module.exports = router;
