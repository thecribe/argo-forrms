const multer = require("multer");
const mariadb = require("mariadb");

require("dotenv").config();

const db = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  connectionLimit: 10,
});

const fileUpload = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    // const ext = file.mimetype.split("/")[1];
    let name = file.originalname.replaceAll(" ", "-");
    cb(null, `/${Date.now()}-${name}`);
  },
});

const uploadFile = multer({ storage: fileUpload });

module.exports = {
  uploadFile,
  db,
};
