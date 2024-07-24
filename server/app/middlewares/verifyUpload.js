/* eslint-disable consistent-return */
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const uploadPath = path.join(__dirname, "../../public/assets/images/upload");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const newFileName = `${uuidv4()}.jpg`;
    cb(null, newFileName);
  },
});

const upload = multer({ storage });

const handleFileUpload = (req, res, next) => {
  const { file } = req;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }

  req.newPath = `/assets/images/upload/${file.filename}`;
  req.latitude = req.body.latitude;
  req.longitude = req.body.longitude;

  next();
};

module.exports = {
  upload,
  handleFileUpload,
};
