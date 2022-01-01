const gFetch = require("../configuration/gfetch");
const errorFunc = require("../configuration/errorFunc");
const resFunc = require("../configuration/resFunc");

const getAllCategories = async (req, res) => {
  try {
    const query = `{
  	    categories {
            id
            categoryName
            slug
            products {
                id
            productTitle
            productPrice
            isProductOnSale
            productSalePrice
            productFeaturedImage {
                url
                }
            }
        }
    }`;
    const data = await gFetch(query);

    resFunc(200, data, data.categories.length, res);
  } catch (error) {
    errorFunc(
      error.response.errors[0]?.extensions?.code || 400,
      error.response.errors[0].message,
      res
    );
  }
};

const getSingleCategory = async (req, res) => {
  const catId = req.params.catid;
  try {
    const query = `{
  	    category(where: {id: "${catId}"}) {
            id
            categoryName
            slug
            products {
                id
            productTitle
            productPrice
            isProductOnSale
            productSalePrice
            productFeaturedImage {
                url
                }
            }
        }
    }`;
    const data = await gFetch(query);

    resFunc(200, data, 1, res);
  } catch (error) {
    errorFunc(
      error.response.errors[0]?.extensions?.code || 400,
      error.response.errors[0].message,
      res
    );
  }
};
module.exports = { getAllCategories, getSingleCategory };
