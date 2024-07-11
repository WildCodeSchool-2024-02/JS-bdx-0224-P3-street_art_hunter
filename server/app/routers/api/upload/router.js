const express = require("express");

const router = express.Router();

const uploadActions = require("../../../controllers/uploadActions");

router.post("/upload", uploadActions);

module.exports = router;
