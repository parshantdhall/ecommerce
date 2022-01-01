const errorFunc = require("../configuration/errorFunc");
const { query } = require("../configuration/database");
const resFunc = require("../configuration/resFunc");

const getAllOrders = async (req, res) => {
  try {
    const allOrders = await query("SELECT * FROM orders");
    return resFunc(200, allOrders.rows, allOrders.rowCount, res);
  } catch (error) {
    errorFunc(404, error.message, res);
  }
};

module.exports = {
  getAllOrders,
};
