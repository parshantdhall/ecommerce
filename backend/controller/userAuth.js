const { query } = require("../configuration/database");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const resultedUser = await query(
      "SELECT password FROM users WHERE email=$1",
      [email]
    );
    const hashedPassword = resultedUser.rows.password;

    if (!hashedPassword) throw new Error("Please Check your email or password");

    // If there is hashed password is in the DB it means user is already registered
    const isMatched = bcrypt.compare(password, hashedPassword);

    // If password is wrong
    if (!isMatched) throw new Error("Please Check your email or password");

    // If password is right
    // *TODO: Assign JWT here!
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
