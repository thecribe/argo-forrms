const express = require("express");
const {
  addUser,
  userAuth,
  userLogOut,
} = require("../controllers/userController");
const { verifyToken } = require("../controllers/utilities");
const router = express.Router();

router.route("/").post(addUser);
router.route("/userAuth").post(userAuth);
router.route("/logout").get(verifyToken, userLogOut);

module.exports = router;
