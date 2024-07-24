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

const browseComparedArts = async (req, res, next) => {
  try {
    const arts = await tables.art.readComparedArts();
    res.json(arts);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const art = req.body;
  try {
    const insertId = await tables.art.update(art, req.params.id);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  browseAccepted,
  count,
  browseComparedArts,
  edit,
};
