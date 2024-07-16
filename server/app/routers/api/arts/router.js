const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/artActions");

router.get("/", browse);

const { count } = require("../../../controllers/artActions");

router.get("/count", count);

module.exports = router;
