const fs = require("fs");
const tables = require("../../database/tables");

const add = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    const newPath = `public/assets/images/upload/${req.file.originalname}`;

    await fs.rename(req.file.path, newPath);

    const insertId = await tables.pending.create({
      image: newPath,
      user_id: req.body.user_id,
      art_id: req.body.art_id,
    });

    res.status(201).json({
      msg: "Upload successful",
      url: `http://localhost:3000/${newPath}`,
      insertId,
    });

    return null;
  } catch (err) {
    next(err);
    return null;
  }
};

module.exports = { add };
