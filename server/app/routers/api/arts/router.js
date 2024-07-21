const express = require("express");

const router = express.Router();

const { browse, count } = require("../../../controllers/artActions");

router.get("/", browse);
router.get("/count", count);

module.exports = router;
