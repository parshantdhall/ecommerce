import { Box, Grid, GridItem } from "@chakra-ui/react";

const MainBodyProductDetail = () => {
  return (
    <Box w="full" h="full">
      <Grid templateColumns="repeat(5, 1fr)" w="full" h="full">
        <GridItem colSpan={3}></GridItem>
        <GridItem colSpan={3}></GridItem>
      </Grid>
    </Box>
  );
};

export default MainBodyProductDetail;
