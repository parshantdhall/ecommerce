import { Box, Grid, GridItem } from "@chakra-ui/react";
import LeftSideBar from "../sections/search page/LeftSideBar";
import ProductGrid from "../individual components/ProductGrid";
import RightSideBar from "../sections/search page/RightSideBar";

const MainBodySearchPage = () => {
  return (
    <Box w="full" h="full" pt={4} as="main">
      <Grid templateColumns="repeat(5, 1fr)" w="full" h="full">
        <GridItem colSpan={1}>
          <LeftSideBar />
        </GridItem>
        <GridItem colSpan={3}>
          <ProductGrid />
        </GridItem>
        <GridItem colSpan={1}>
          <RightSideBar />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default MainBodySearchPage;
