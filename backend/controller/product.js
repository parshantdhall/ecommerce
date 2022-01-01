const gFetch = require("../configuration/gfetch");
const errorFunc = require("../configuration/errorFunc");
const resFunc = require("../configuration/resFunc");

const getAllProducts = async (req, res) => {
  try {
    const query = `{
  	products{
      id,
		  productTitle
		  productSlug
      productPrice
		  productSalePrice
      category {
        id
        categoryName
      }
      isProductOnSale

      productFeaturedImage{
        url
        width
        height
      }

    }
}`;
    const data = await gFetch(query);

    resFunc(200, data, data.products.length, res);
  } catch (error) {
    errorFunc(
      error.response.errors[0]?.extensions?.code || 400,
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
       id,
		  productTitle
		  productSlug
      productPrice
		  productSalePrice
      category {
        id
        categoryName
      }
		  colorsAvailable
      isProductOnSale
		  numberOfItemsLeft
		  productDescription {
        raw
      }
      productFeaturedImage{
        url
        width
        height
      }
      productImages{
        url
        width
        height
      }
    }
  }`;
    const data = await gFetch(query);
    resFunc(200, data, 1, res);
  } catch (error) {
    errorFunc(
      error.response.errors[0]?.extensions?.code || 404,
      error.response.errors[0].message,
      res
    );
  }
};

module.exports = { getAllProducts, getSingleProduct };
