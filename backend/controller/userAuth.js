const bcrypt = require("bcryptjs");
const { query } = require("../configuration/database");
const { assignJwt } = require("../utilities/jwtFunctions");

const loginUser = async (req, res) => {
  try {
    // console.log(req.body);
    const { email, password } = req.body;
    const resultedUser = await query(
      "SELECT user_id, password, is_active FROM users WHERE email=$1",
      [email]
    );

    if (resultedUser.rows.length <= 0)
      throw new Error("Please Check your email or password");

    const hashedPassword = resultedUser.rows[0].password;
    const userId = resultedUser.rows[0].user_id;
    const isUserActive = resultedUser.rows[0].is_active;

    // If there is hashed password is in the DB it means user is already registered
    const isMatched = await bcrypt.compare(password, hashedPassword);

    // If password is wrong
    if (!isMatched) throw new Error("Please Check your email or password");

    // check if user is active or not
    if (!isUserActive) {
      throw new Error(
        "The requested user is not active! Please call administrator"
      );
    }
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
        uid: userId,
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
