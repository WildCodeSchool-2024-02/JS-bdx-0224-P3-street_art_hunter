const express = require("express");

const router = express.Router();

const {
  browse,
  count,
  browseAccepted,
} = require("../../../controllers/artActions");

router.get("/", browse);
router.get("/count", count);
router.get("/accepted", browseAccepted);

module.exports = router;
