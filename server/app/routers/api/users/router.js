const express = require("express");

const router = express.Router();

const { count } = require("../../../controllers/userActions");

router.get("/count", count);

module.exports = router;