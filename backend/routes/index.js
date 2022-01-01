const userRoutes = require("./user");
const userAuthRoutes = require("./userAuth");
const productRoutes = require("./product");
const orderRoutes = require("./order");
const categoryRoutes = require("./category");

module.exports = (app) => {
  app.use("/api/v1/user", userRoutes);
  app.use("/api/v1/auth", userAuthRoutes);
  app.use("/api/v1/products", productRoutes);
  app.use("/api/v1/orders", orderRoutes);
  app.use("/api/v1/categories", categoryRoutes);
};
