const tables = require("../../database/tables");

const count = async (req, res, next) => {
  try {
    const users = await tables.user.getTotalUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const user = req.body;
  try {
    const insertId = await tables.user.create(user);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  count,
  add,
};
