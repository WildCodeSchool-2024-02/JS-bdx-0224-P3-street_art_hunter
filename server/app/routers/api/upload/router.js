const express = require("express");

const router = express.Router();
const {
  upload,
  handleFileUpload,
} = require("../../../middlewares/verifyUpload");
const uploadActions = require("../../../controllers/uploadActions");

router.post("/", upload.single("file"), handleFileUpload, uploadActions.add);

module.exports = router;
