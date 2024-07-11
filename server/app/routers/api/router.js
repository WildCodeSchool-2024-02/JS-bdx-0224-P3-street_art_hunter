const express = require("express");

const router = express.Router();

const authRouter = require("./auth/router");

router.use("/auth", authRouter);

const artsRouter = require("./arts/router");

router.use("/arts", artsRouter);

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const picturesRouter = require("./pictures/router");

router.use("/pictures", picturesRouter);

const uploadRouter = require("./upload/router");

router.use("/upload", uploadRouter);

module.exports = router;
