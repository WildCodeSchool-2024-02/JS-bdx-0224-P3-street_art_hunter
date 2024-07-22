const express = require("express");

const router = express.Router();

const {
  browse,
  count, browseComparedArts, edit,
  browseAccepted,
} = require("../../../controllers/artActions");

router.get("/", browse);
router.get("/count", count);
router.get("/accepted", browseAccepted);
router.get("/comparedArts", browseComparedArts);
router.put("/:id", edit);

module.exports = router;
