// const express = require("express");

// const router = express.Router();

// const userActions = require("../../../controllers/userActions");
// const { verifyUser } = require("../../../middlewares/verifyUser");
// const { verifyToken } = require("../../../middlewares/verifyToken");
// const {
//   verifyHashPassword,
// } = require("../../../middlewares/verifyHashPassword");

// router.use(verifyToken);

// router.post("/users", verifyHashPassword, userActions.add);

// router.post("/login", verifyUser);

// module.exports = router;

const express = require("express");

const router = express.Router();

const userActions = require("../../../controllers/userActions");
const { verifyUser } = require("../../../middlewares/verifyUser");
const { verifyToken } = require("../../../middlewares/verifyToken");
const {
  verifyHashPassword,
} = require("../../../middlewares/verifyHashPassword");

router.post("/login", verifyUser);

router.post("/users", verifyToken, verifyHashPassword, userActions.add);

module.exports = router;
