const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/artActions");

router.get("/", browse);

module.exports = router;
