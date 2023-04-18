const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { uploadFile } = require("./controllers/utilities");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config();

app.use(
  cors({
    origin: true,
    credentials: true, //access-control-allow-credentials:true
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

app.get("/testing", (req, res) => {
  res.json(req.cookies.access_token);
});

app.post("/api/uploads", uploadFile.single("file"), (req, res) => {
  res.json(process.env.ARGO_URL + req.file.path);
});

app.use("/api/form", require("./routes/formInputRoute"));
app.use("/api/users", require("./routes/userRoute"));

app.listen(5001, () => console.log(process.env.DB_USER));
