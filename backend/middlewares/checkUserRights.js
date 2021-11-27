/**This file will check the user rights to access the data
 * It will check if the user is admin or not
 */

const { query } = require("../configuration/database");

const checkIfAdmin = async (req, res, next) => {
  try {
    const loggedUser = res.logged_user;
    const user = await query("SELECT is_admin FROM users WHERE user_id=$1", [
      loggedUser,
    ]);
    if (!user || user.rows.length <= 0) throw new Error("No such User Exists!");
    const isAdmin = user.rows[0].is_admin;

    if (!isAdmin) throw new Error("Forbidden");
    next();
  } catch (error) {
    return res.status(403).json({
      payload: error.message,
      status: "error",
    });
  }
};

module.exports = { checkIfAdmin };
