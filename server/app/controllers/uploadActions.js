/* eslint-disable camelcase */
const tables = require("../../database/tables");

const add = async (req, res, next) => {
  try {
    const { title, information, artist, user_id, latitude, longitude } =
      req.body;

    const artistRecord = await tables.artist.create({ name: artist });

    const artRecord = await tables.art.create({
      title,
      information,
      latitude,
      longitude,
      status: "pending",
    });

    const insertId = await tables.picture.create({
      image: req.newPath,
      user_id: parseInt(user_id, 10),
      art_id: artRecord,
    });

    res.status(201).json({
      msg: "Upload successful",
      url: `http://localhost:3000/${req.newPath}`,
      insertId,
      artistRecord,
      artRecord,
    });
  } catch (dbErr) {
    console.error("Error saving to database:", dbErr);
    next(dbErr);
  }
};

module.exports = { add };
