const express = require("express");

const router = express.Router();

const userActions = require("../../../controllers/userActions");
const { verifyUser } = require("../../../middlewares/verifyUser");
const { verifyToken } = require("../../../middlewares/verifyToken");
const {
  verifyHashPassword,
} = require("../../../middlewares/verifyHashPassword");

router.post("/login", verifyUser);

router.post("/users", verifyToken, verifyHashPassword, userActions.add);

module.exports = router;
