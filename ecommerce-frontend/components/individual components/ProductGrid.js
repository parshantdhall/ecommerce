import {
  Box,
  SimpleGrid,
  Button,
  useMediaQuery,
  Center,
  Text,
} from "@chakra-ui/react";
import Product from "./Product";

const ProductGrid = ({ productsData }) => {
  const [isSmallerThanIp6] = useMediaQuery("(max-width: 350px)");
  return (
    <Box my={10}>
      <SimpleGrid
        minChildWidth={isSmallerThanIp6 ? "200px" : "310px"}
        spacing={10}
      >
        {productsData &&
        productsData?.payload?.data?.products &&
        productsData.payload.data.products.length > 0 ? (
          productsData.payload.data.products.map((product) => (
            <Product key={product.id} productData={product} />
          ))
        ) : (
          <Center>
            <Text>No Products Found</Text>
          </Center>
        )}
      </SimpleGrid>

      {/* ALL products configuration */}
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
