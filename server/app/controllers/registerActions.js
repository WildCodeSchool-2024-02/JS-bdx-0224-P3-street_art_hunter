const tables = require("../../database/tables");

const add = async (req, res, next) => {
  const register = req.body;
  console.info(req.body);

  try {
    const insertId = await tables.register.create(register);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = { add };
