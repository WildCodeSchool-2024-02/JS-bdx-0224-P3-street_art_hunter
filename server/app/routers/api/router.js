const express = require("express");

const router = express.Router();

const artsRouter = require("./arts/router");

router.use("/arts", artsRouter);

module.exports = router;
