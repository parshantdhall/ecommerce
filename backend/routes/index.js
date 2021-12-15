const userRoutes = require("./user");
const userAuthRoutes = require("./userAuth");
const productRoutes = require("./product");

module.exports = (app) => {
  app.use("/api/v1/user", userRoutes);
  app.use("/api/v1/auth", userAuthRoutes);
  app.use("/api/v1/products", productRoutes);
};
