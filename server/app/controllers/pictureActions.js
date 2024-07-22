const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const pictures = await tables.picture.readAll();
    res.json(pictures);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const picture = await tables.picture.read(req.params.id);
    if (picture == null) {
      res.sendStatus(404);
    }
    res.json(picture);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read, 
};
