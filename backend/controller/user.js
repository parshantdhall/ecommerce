const { query } = require("../configuration/database");
const bcrypt = require("bcryptjs");
const errorFunc = require("../configuration/errorFunc");
const resFunc = require("../configuration/resFunc");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await query(
      "SELECT user_id, created_at, first_name, last_name, email, is_admin, is_active FROM users"
    );

    return resFunc(200, allUsers.rows, allUsers.rowCount, res);
  } catch (error) {
    errorFunc(404, error.message, res);
  }
};

const createUser = async (req, res) => {
  try {
    const userBody = req.body;
    const { firstName, lastName, email, password } = userBody;
    let hash;
    // Salting and hashing of password
    try {
      const salt = await bcrypt.genSalt(10);
      hash = await bcrypt.hash(password, salt);
    } catch (err) {
      console.log(err);
      return res.status(400).send("Bad Request");
    }
    // Adding user to the DB
    const newUser = await query(
      `INSERT INTO users (user_id, first_name, last_name, email, password) VALUES (uuid_generate_v4(), $1, $2, $3, $4) RETURNING user_id, first_name, last_name, email`,
      [firstName, lastName, email, hash]
    );

    // **NOTE**: Create and send JWT with this response and with the login system for customer login system

    return resFunc(201, newUser.rows, newUser.rowCount, res);
  } catch (error) {
    errorFunc(400, error.message, res);
  }
};

const getSingleUser = async (req, res) => {
  try {
    // User id coming from jwt
    const user_id = req.params.uid;
    // if requested user id is not equal to the one in jwt
    if (res.logged_user !== user_id) throw new Error("You are not Authorized");

    // if everything went fine send the user
    const user = await query(
      "SELECT user_id, created_at, first_name, last_name, email, is_admin, is_active FROM users WHERE user_id=$1",
      [user_id]
    );
    if (user.rowCount <= 0) throw new Error("No User Found!");

    return resFunc(200, user.rows, user.rowCount, res);
  } catch (error) {
    console.log(error);
    return errorFunc(404, error.message, res);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getSingleUser,
};
