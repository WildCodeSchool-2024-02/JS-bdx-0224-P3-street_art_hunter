const tables = require("../../database/tables");

const add = async (req, res, next) => {
  try {
    const insertId = await tables.pending.create({
      image: req.newPath,
      user_id: req.body.user_id,
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
