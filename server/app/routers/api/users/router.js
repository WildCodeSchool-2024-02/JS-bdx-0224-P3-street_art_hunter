const express = require("express");

const router = express.Router();

const {
  browse,
  count,
  rank,
  read,
  edit,
  destroy,
} = require("../../../controllers/userActions");

router.get("/", browse);
router.get("/count", count);
router.get("/rank", rank);
router.get("/:id", read);
router.put("/:id", edit);
router.delete("/:id", destroy);

module.exports = router;
