const tables = require("../../database/tables");

const add = async (req, res, next) => {
  try {
    const insertId = await tables.picture.create({
      image: req.newPath,
      user_id: req.body.user_id,
      latitude: req.latitude,
      longitude: req.longitude,
    });

    res.status(201).json({
      msg: "Upload successful",
      url: `http://localhost:3000/${req.newPath}`,
      insertId,
    });
  } catch (dbErr) {
    console.error("Error saving to database:", dbErr);
    next(dbErr);
  }
};

module.exports = { add };
