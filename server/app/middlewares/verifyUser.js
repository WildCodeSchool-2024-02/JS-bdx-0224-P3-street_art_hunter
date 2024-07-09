const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");

const verifyUser = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmailWithPassword(req.body.email);

    let adminRole = null;

    if (user === null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(
      user.hashed_password,
      req.body.password
    );

    if (verified) {
      delete user.hashed_password;

      if (user.is_Admin === 1) {
        adminRole = user.is_Admin;
      }

      const token = await jwt.sign(
        { sub: user.id, role: adminRole },
        process.env.APP_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res.json({
        token,
      });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  verifyUser,
};
