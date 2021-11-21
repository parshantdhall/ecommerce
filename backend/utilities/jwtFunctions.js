var jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWTSECRET;

// Assigning the JWT token
const assignJwt = async (payload) => {
  try {
    const jwt_token = await jwt.sign({ payload }, jwtSecret);
    return {
      is_error: false,
      token: jwt_token,
    };
  } catch (error) {
    console.log(error);
    return {
      error,
      is_error: true,
    };
  }
};

// Validating JWT token
const validateJwt = async (token) => {
  try {
    const decoded = await jwt.verify(token, jwtSecret);
    return {
      is_error: false,
      decoded,
    };
  } catch (error) {
    return {
      is_error: true,
      error,
    };
  }
};

module.exports = {
  assignJwt,
  validateJwt,
};
