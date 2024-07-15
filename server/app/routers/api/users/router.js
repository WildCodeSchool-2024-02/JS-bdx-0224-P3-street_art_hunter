const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  edit,
  destroy,
} = require("../../../controllers/userActions");

router.get("/", browse);
router.get("/:id", read);
router.put("/:id", edit);
router.delete("/:id", destroy);

module.exports = router;
