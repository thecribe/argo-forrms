const bcrypt = require("bcrypt");
const { db } = require("./utilities");
const jwt = require("jsonwebtoken");

const addUser = (req, res) => {
  const { username, password, email } = req.body;

  bcrypt.hash(password, 10, async (err, hash) => {
    if (hash) {
      let conn;
      try {
        conn = await db.getConnection();
        const response = await db.query(
          "INSERT INTO users(username, email, password) VALUES(?,?,?)",
          [username, email, hash]
        );
        res
          .status(200)
          .json({ status: 1, message: "User created successfully" });
      } catch (error) {
        res.json(error);
      } finally {
        if (conn) conn.release();
      }
    }
  });
};

const userAuth = async (req, res) => {
  const { username, password } = req.body;
  if (username.length === 0 || password.length === 0) {
    res
      .status(400)
      .json({ status: 0, message: "please insert username or password" });
  } else {
    let conn;

    try {
      conn = await db.getConnection();
      const response = await db.query(
        "SELECT * fROM users WHERE username=? or email=?",
        [username, username]
      );
      if (response.length <= 0) {
        res.status(401).json({ status: 0, message: "User does not exist" });
      } else {
        bcrypt.compare(password, response[0].password, (err, result) => {
          if (err)
            res.status(401).json({ status: 0, message: "Error Verify data" });

          if (result) {
            const token = jwt.sign(
              {
                username,
                id: response[0].id,
                role: response[0].role,
              },
              process.env.JWT_KEY,
              { expiresIn: "1h" }
            );
            res
              .cookie("access_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
              })
              .status(200)
              .json({
                status: 1,
                userdata: {
                  username,
                  id: response[0].id,
                  role: response[0].role,
                },
                message: `${username} logged in successfully`,
              });
          } else {
            res
              .status(401)
              .json({ status: 0, message: "Please enter correct password" });
          }
        });
      }
    } catch (error) {
      res.json({ status: 0, message: error.message });
    } finally {
      if (conn) conn.release();
    }
  }
};

const userLogOut = (req, res) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json({ status: 1, message: "user logged out successfully" });
  } catch (error) {
    res.status(401).json({ status: 0, message: error.message });
  }
};

module.exports = {
  addUser,
  userAuth,
  userLogOut,
};
