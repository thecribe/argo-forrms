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
    origin: ["http://localhost:3000", "https://thecribe.github.io"],
    credentials: true, //access-control-allow-credentials:true
  })
);

// app.options("/", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "https://thecribe.github.io");
//   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   res.sendStatus(204);
// });
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
