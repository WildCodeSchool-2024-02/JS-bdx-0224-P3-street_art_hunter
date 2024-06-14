const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const arts = await tables.art.readAll();
    res.json(arts);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
};
