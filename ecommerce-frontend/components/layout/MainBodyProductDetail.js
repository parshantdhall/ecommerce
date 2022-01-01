import { Box, Grid, GridItem, useMediaQuery } from "@chakra-ui/react";
import ProductDescContainer from "../sections/product detail page/ProductDescContainer";
import ProductImageContainer from "../sections/product detail page/ProductImageContainer";

const MainBodyProductDetail = ({ productData }) => {
  const [isSmallerThan750px] = useMediaQuery("(max-width: 750px)");

  const {
    productTitle,
    productPrice,
    isProductOnSale,
    productSalePrice,
    category,
    colorsAvailable,
    numberOfItemsLeft,
    productDescription,
    productImages,
    productFeaturedImage,
  } = productData;

  return (
    <Box w="full" h="full">
      <Grid templateColumns="repeat(4, 1fr)" w="full" h="full">
        <GridItem
          colSpan={isSmallerThan750px ? 4 : 2}
          sx={{
            /* These media queries are for the server side rendering
          becoz u cant use the usemediaquery hook at initial load
          */
            "@media screen and (max-width: 750px)": {
              gridColumn: "1 / span 4",
            },
          }}
        >
          <ProductImageContainer
            productFeaturedImage={productFeaturedImage}
            productImages={productImages}
          />
        </GridItem>
        <GridItem
          colSpan={isSmallerThan750px ? 4 : 2}
          sx={{
            "@media screen and (max-width: 750px)": {
              gridColumn: "1 / span 4",
            },
          }}
        >
          <ProductDescContainer
            productTitle={productTitle}
            productPrice={productPrice}
            isProductOnSale={isProductOnSale}
            productSalePrice={productSalePrice}
            category={category}
            colorsAvailable={colorsAvailable}
            numberOfItemsLeft={numberOfItemsLeft}
            productDescription={productDescription}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default MainBodyProductDetail;
