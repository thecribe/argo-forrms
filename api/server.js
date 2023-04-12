const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { uploadFile } = require("./controllers/utilities");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

app.post("/api/uploads", uploadFile.single("file"), (req, res) => {
  res.json(process.env.ARGO_URL + req.file.path);
});

app.use("/api/form", require("./routes/formInputRoute"));

app.listen(5001, () => console.log(process.env.DB_USER));
