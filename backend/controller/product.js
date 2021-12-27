const gFetch = require("../configuration/gfetch");
const errorFunc = require("../configuration/errorFunc");

const getAllProducts = async (req, res) => {
  try {
    const query = `{
  	products{
      id,
      name,
    }
}`;
    const data = await gFetch(query);
    res.status(200).json(data);
  } catch (error) {
    errorFunc(404, error.response.errors[0].message, res);
  }
};

const getSingleProduct = async (req, res) => {
  const pId = req.params.pid;

  try {
    const query = `{
  	product(where: {id: "${pId}"}) {
      id
      name
    }
  }`;
    const data = await gFetch(query);
    res.status(200).json(data);
  } catch (error) {
    errorFunc(404, error.response.errors[0].message, res);
  }
};

module.exports = { getAllProducts, getSingleProduct };
