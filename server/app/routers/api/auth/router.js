const express = require("express");

const router = express.Router();

const userActions = require("../../../controllers/userActions");
const {
  hashPassword,
  verifyToken,
} = require("../../../middlewares/verifyAuth");

router.post("/users", hashPassword, userActions.add);

const authActions = require("../../../controllers/authActions");

router.post("/login", authActions.login);

router.use(verifyToken);

module.exports = router;
