const multer = require("multer");
const mariadb = require("mariadb");
const jwt = require("jsonwebtoken");

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

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    res.status(401).json({
      status: 0,
      message: "User not Authorize",
    });
  } else {
    try {
      const data = jwt.verify(token, process.env.JWT_KEY);

      req.userData = { ...data };
      return next();
    } catch (error) {
      res.status(401).json({
        status: 0,
        message: "User Authentication failed",
      });
    }
  }
};

module.exports = {
  uploadFile,
  db,
  verifyToken,
};
