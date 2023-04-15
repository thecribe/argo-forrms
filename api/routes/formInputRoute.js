const express = require("express");
const { postForm, getEntries, getEntry } = require("../controllers/formInput");
const router = express.Router();

router.route("/").post(postForm).get(getEntries);
router.route("/entries/:id").get(getEntry);

module.exports = router;
