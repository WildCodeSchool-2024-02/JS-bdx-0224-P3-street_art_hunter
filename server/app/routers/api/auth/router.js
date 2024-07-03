const express = require("express");

const router = express.Router();

const userActions = require("../../../controllers/userActions");
const {
  hashPassword,
  verifyToken,
  verifyUser,
} = require("../../../middlewares/verifyAuth");

router.post("/users", hashPassword, userActions.add);

router.post("/login", verifyUser);

router.use(verifyToken);

module.exports = router;
