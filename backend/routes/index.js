const userRoutes = require("./user");
const userAuthRoutes = require("./userAuth");

module.exports = (app) => {
  app.use("/api/v1/user", userRoutes);
  app.use("/api/v1/auth", userAuthRoutes);
};
