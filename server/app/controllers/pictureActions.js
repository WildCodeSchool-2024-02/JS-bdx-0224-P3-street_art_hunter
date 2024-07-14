const tables = require("../../database/tables");

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
  read,
};
