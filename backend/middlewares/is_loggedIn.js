const { validateJwt } = require("../utilities/jwtFunctions");

const checkUserLoggedIn = async (req, res, next) => {
  try {
    if (
      !req.headers.authorization ||
      !req.headers.authorization === "" ||
      !req.headers.authorization === " "
    ) {
      throw new Error("Unauthorized Access");
    }
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];

    const decode = await validateJwt(token);

    // !if the jwt provided is not valid
    if (decode.is_error) throw new Error("Unauthorized Access");

    // *if jwt valid set user_id in res obj
    res.logged_user = decode.decoded.payload;

    next();
  } catch (error) {
    return res.status(401).json({
      payload: error.message,
      status: "error",
    });
  }
};

module.exports = { checkUserLoggedIn };
