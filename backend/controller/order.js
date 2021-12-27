const errorFunc = require("../configuration/errorFunc");
const { query } = require("../configuration/database");

const getAllOrders = async (req, res) => {
  try {
    const allOrders = await query("SELECT * FROM orders");
    return res.status(200).json({
      payload: {
        count: allOrders.rowCount,
        data: allOrders.rows,
      },
      status: "ok",
    });
  } catch (error) {
    errorFunc(404, error.message, res);
  }
};

module.exports = {
  getAllOrders,
};
