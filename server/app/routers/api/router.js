const express = require("express");

const router = express.Router();

const artsRouter = require("./arts/router");

router.use("/arts", artsRouter);

const authRouter = require("./auth/router");

router.use("/auth", authRouter);

const uploadRouter = require("./upload/router");

router.use("/upload", uploadRouter);

module.exports = router;
