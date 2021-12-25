import { Box, Grid, GridItem } from "@chakra-ui/react";
import ProductDescContainer from "../sections/product detail page/ProductDescContainer";
import ProductImageContainer from "../sections/product detail page/ProductImageContainer";

const MainBodyProductDetail = () => {
  return (
    <Box w="full" h="full">
      <Grid templateColumns="repeat(4, 1fr)" w="full" h="full">
        <GridItem colSpan={2}>
          <ProductImageContainer />
        </GridItem>
        <GridItem colSpan={2}>
          <ProductDescContainer />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default MainBodyProductDetail;
