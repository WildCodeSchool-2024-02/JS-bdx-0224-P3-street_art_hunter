const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const handleFileUpload = (req, res, next) => {
  const newFileName = `${uuidv4()}.jpg`;
  const newPath = `public/assets/images/upload/${newFileName}`;

  fs.rename(req.file.path, newPath, (err) => {
    if (err) {
      console.error("Error moving file:", err);
      return next(err);
    }

    req.newPath = newPath;
    req.latitude = req.body.latitude || null;
    req.longitude = req.body.longitude || null;
    next();
    return true;
  });
};

module.exports = {
  handleFileUpload,
};
