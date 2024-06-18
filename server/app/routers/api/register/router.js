const express = require("express");

const router = express.Router();

const { add } = require("../../../controllers/registerActions");

const validateRegister = require("../../../middlewares/validateRegister");

router.post("", validateRegister, add);
