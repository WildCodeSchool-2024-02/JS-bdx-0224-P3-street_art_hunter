const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const tables = require("../../database/tables");

const add = async (req, res, next) => {
  try {
    // console.log("Request received at backend: ", req.file);

    if (!req.file) {
      console.error("No file uploaded");
      return res.status(400).send("No file uploaded");
    }

    const newFileName = `${uuidv4()}.jpg`;
    const newPath = `public/assets/images/upload/${newFileName}`;

    fs.rename(req.file.path, newPath, async (err) => {
      if (err) {
        console.error("Error moving file:", err);
        return next(err);
      }

      const defaultUsedId = 1;

      try {
        const insertId = await tables.pending.create({
          image: newPath,
          user_id: defaultUsedId,
        });

        // console.log("File uploaded successfully", newPath);

        res.status(201).json({
          msg: "Upload successful",
          url: `http://localhost:3000/${newPath}`,
          insertId,
        });
      } catch (dbErr) {
        console.error("Error saving to database:", dbErr);
        next(dbErr);
      }
      return null;
    });
  } catch (err) {
    console.error("Error during file upload", err);
    next(err);
  }
  return null;
};

module.exports = { add };
