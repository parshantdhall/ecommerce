const bcrypt = require("bcryptjs");
const { query } = require("../configuration/database");
const { assignJwt } = require("../utilities/jwtFunctions");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const resultedUser = await query(
      "SELECT user_id, password FROM users WHERE email=$1",
      [email]
    );
    const hashedPassword = resultedUser.rows[0].password;
    const userId = resultedUser.rows[0].user_id;

    if (!hashedPassword) throw new Error("Please Check your email or password");

    // If there is hashed password is in the DB it means user is already registered
    const isMatched = bcrypt.compare(password, hashedPassword);

    // If password is wrong
    if (!isMatched) throw new Error("Please Check your email or password");

    // *----------------------If password is right----------
    // Assign JWT
    const jwtResult = await assignJwt(userId);

    if (jwtResult.is_error) {
      console.log(jwtResult.error);
      throw new Error("Cannot Assign JWT");
    }

    return res.status(200).json({
      payload: {
        token: jwtResult.token,
      },
      status: "ok",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      payload: error.message,
      status: "error",
    });
  }
};

module.exports = {
  loginUser,
};
