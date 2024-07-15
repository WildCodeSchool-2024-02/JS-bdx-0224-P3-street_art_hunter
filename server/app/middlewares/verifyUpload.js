const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const exifParser = require("exif-parser");

const handleFileUpload = (req, res, next) => {
  const newFileName = `${uuidv4()}.jpg`;
  const newPath = `public/assets/images/upload/${newFileName}`;

  fs.rename(req.file.path, newPath, (err) => {
    if (err) {
      console.error("Error moving file:", err);
      return next(err);
    }

    fs.readFile(newPath, (readErr, data) => {
      if (readErr) {
        console.error("Error reading file: ", readErr);
        return next(readErr);
      }

      const parser = exifParser.create(data);
      const result = parser.parse();

      const latitude = result.tags.GPSLatitude || null;
      const longitude = result.tags.GPSLongitude || null;

      req.newPath = newPath;
      req.latitude = latitude;
      req.longitude = longitude;
      next();
      return null;
    });
    return null;
  });
};

module.exports = {
  handleFileUpload,
};
