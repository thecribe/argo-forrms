const express = require("express");
const { postForm, getEntries, getEntry } = require("../controllers/formInput");
const { verifyToken } = require("../controllers/utilities");
const router = express.Router();

router.route("/").post(postForm).get(verifyToken, getEntries);
router.route("/entries/:id").get(verifyToken, getEntry);

module.exports = router;
