const gFetch = require("../configuration/gfetch");
const errorFunc = require("../configuration/errorFunc");
const resFunc = require("../configuration/resFunc");

const getAllProducts = async (req, res) => {
  try {
    const query = `{
  	products{
      id,
      productTitle,
      productPrice
    }
}`;
    const data = await gFetch(query);

    resFunc(200, data, data.products.length, res);
  } catch (error) {
    errorFunc(
      error.response.errors[0].extensions.code,
      error.response.errors[0].message,
      res
    );
  }
};

const getSingleProduct = async (req, res) => {
  const pId = req.params.pid;

  try {
    const query = `{
  	product(where: {id: "${pId}"}) {
      id
      productTitle
    }
  }`;
    const data = await gFetch(query);
    resFunc(200, data, 1, res);
  } catch (error) {
    errorFunc(404, error.response.errors[0].message, res);
  }
};

module.exports = { getAllProducts, getSingleProduct };
