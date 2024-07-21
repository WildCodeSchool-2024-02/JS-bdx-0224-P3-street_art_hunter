const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const arts = await tables.art.readAll();
    res.json(arts);
  } catch (err) {
    next(err);
  }
};

const browseAccepted = async (req, res, next) => {
  try {
    const arts = await tables.art.readAccepted();
    res.json(arts);
  } catch (err) {
    next(err);
  }
};

const count = async (req, res, next) => {
  try {
    const arts = await tables.art.getTotalArts();
    res.json(arts);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  browseAccepted,
  count,
};
