const express = require("express");

const router = express.Router();

const userActions = require("../../../controllers/userActions");
const { verifyUser } = require("../../../middlewares/verifyUser");
const {
  verifyHashPassword,
} = require("../../../middlewares/verifyHashPassword");

router.post("/users", verifyHashPassword, userActions.add);

router.post("/login", verifyUser);


module.exports = router;
