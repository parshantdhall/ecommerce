const { query } = require("../configuration/database");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await query("SELECT * FROM users");
    return res.status(200).json({
      payload: {
        count: allUsers.rowCount,
        data: allUsers.rows,
      },
      status: "ok",
    });
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      payload: err,
      status: "error",
    });
  }
};

module.exports = {
  getAllUsers,
};
