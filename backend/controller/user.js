const { query } = require("../configuration/database");
// const {} = require('uuid');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await query(
      "SELECT user_id, created_at, first_name, last_name, email, is_admin, is_active FROM users"
    );
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

const createUser = async (req, res) => {
  try {
    const userBody = req.body;
    const { firstName, lastName, email, password } = userBody;

    // *TODO: DO salting and hashing of passwords...

    const newUser = await query(
      `INSERT INTO users (user_id, first_name, last_name, email, password) VALUES (uuid_generate_v4(), $1, $2, $3, $4) RETURNING user_id, first_name, last_name, email`,
      [firstName, lastName, email, password]
    );
    return res.status(201).json({
      payload: {
        count: newUser.rowCount,
        data: newUser.rows,
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
  createUser,
};
