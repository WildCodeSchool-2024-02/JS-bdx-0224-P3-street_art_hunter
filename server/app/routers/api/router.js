const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const artsRouter = require("./arts/router");

router.use("/arts", artsRouter);

const authRouter = require("./auth/router");

router.use("/auth", authRouter);

/* ************************************************************************* */

module.exports = router;
