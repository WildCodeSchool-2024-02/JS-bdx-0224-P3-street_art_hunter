const express = require("express");

const router = express.Router();

const { read } = require("../../../controllers/pictureActions");

router.get("/:id", read);

module.exports = router;
