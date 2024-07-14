const express = require("express");

const multer = require("multer");

const upload = multer({ dest: "public/tmp/" });

const router = express.Router();

const { handleFileUpload } = require("../../../middlewares/verifyUpload");

const uploadActions = require("../../../controllers/uploadActions");

router.post("/", upload.single("file"), handleFileUpload, uploadActions.add);

module.exports = router;
