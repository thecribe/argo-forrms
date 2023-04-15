const { NULL } = require("node-sass");
const { db } = require("./utilities");

const postForm = async (req, res) => {
  let conn;
  try {
    const {
      firstname,
      lastname,
      email,
      phone_number,
      position,
      speciality,
      affiliation,
      research_interest,
      experience,
      publications,
      awards,
      personal_statement,
      fileUrl,
    } = req.body;

    if (!email.includes("@")) {
      res.status(400).json({ status: 0, message: "Please enter valid email" });
    } else {
      conn = await db.getConnection();
      const response = await db.query(
        "INSERT INTO form_fields (firstname, lastname, email, phone_number, position, speciality,affiliation, research_interest, experience, publications,awards,personal_statement,fileUrl) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          firstname,
          lastname,
          email,
          phone_number,
          position,
          speciality,
          affiliation,
          research_interest,
          experience,
          publications,
          awards,
          personal_statement,
          fileUrl,
        ]
      );
      res
        .status(200)
        .json({ status: 1, message: "form submitted successfully" });
    }
  } catch (error) {
    console.log(req.body);
    res.json(error);
  } finally {
    if (conn) conn.release();
  }
};

const getEntries = async (req, res) => {
  let conn;
  try {
    conn = await db.getConnection();
    const response = await db.query("SELECT * from form_fields");
    res.status(200).json({ status: 1, data: response });
  } catch (error) {
    res.json(error);
  } finally {
    if (conn) conn.release();
  }
};

const getEntry = async (req, res) => {
  const { id } = req.params;
  let conn;
  try {
    conn = await db.getConnection();
    const response = await db.query("SELECT * FROM form_fields WHERE id=?", [
      id,
    ]);
    if (response.length > 0) {
      res.status(200).json({ status: 1, data: response });
    } else {
      res.status(400).json({ status: 0, message: "No entry found" });
    }
  } catch (error) {
    res.json(error);
  } finally {
    if (conn) conn.release();
  }
};

module.exports = {
  postForm,
  getEntries,
  getEntry,
};
