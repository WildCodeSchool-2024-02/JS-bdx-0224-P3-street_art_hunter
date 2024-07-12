const express = require("express");

const multer = require("multer");

const upload = multer({ dest: "public/tmp/" });

const router = express.Router();

const uploadActions = require("../../../controllers/uploadActions");

router.post("/", upload.single("file"), uploadActions.add);

module.exports = router;
