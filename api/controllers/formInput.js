const { db } = require("./utilities");

const formInputHandler = async (req, res) => {
  let conn;
  try {
    conn = await db.getConnection();
    const response = await db.query("SELECT * from form_fields");
    console.log(response);
    res.json(response);
  } catch (error) {
    res.json(error);
  } finally {
    if (conn) conn.release();
  }
};

module.exports = {
  formInputHandler,
};
