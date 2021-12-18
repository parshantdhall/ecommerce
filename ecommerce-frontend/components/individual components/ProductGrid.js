import { Box, SimpleGrid, Button, useMediaQuery } from "@chakra-ui/react";
import Product from "./Product";

const ProductGrid = () => {
  const [isSmallerThanIp6] = useMediaQuery("(max-width: 350px)");

  return (
    <Box my={10}>
      <SimpleGrid
        minChildWidth={isSmallerThanIp6 ? "200px" : "310px"}
        spacing={10}
      >
        <Product />
        <Product />
        <Product />
        <Product />
      </SimpleGrid>
      <Box
        w="full"
        display="flex"
        justifyContent="center"
        mt={{ base: 10, md: 7 }}
      >
        <Button
          variant="solid"
          colorScheme="yellow"
          size="lg"
          w={{
            base: "45%",
            md: "30%",
          }}
          mt={4}
          minW="200px"
        >
          All Products
        </Button>
      </Box>
    </Box>
  );
};

export default ProductGrid;
