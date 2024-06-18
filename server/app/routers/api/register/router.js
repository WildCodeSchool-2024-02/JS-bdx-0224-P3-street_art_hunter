const express = require("express");

const router = express.Router();

const { add } = require("../../../controllers/registerActions");

router.post("", add);
