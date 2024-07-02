const express = require("express");

const router = express.Router();

const { browse, read, edit } = require("../../../controllers/userActions");

router.get("/", browse);
router.get("/:id", read)
router.put("/:id", edit);

module.exports = router;
