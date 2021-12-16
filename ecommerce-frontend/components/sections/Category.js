import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  VStack,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import CategorySlider from "../individual components/CategorySlider";
import Product from "../individual components/Product";

const Category = () => {
  const [isSmallerThanIp6] = useMediaQuery("(max-width: 350px)");
  return (
    <Box
      as="section"
      role="category section"
      p={{ base: 5, md: 7, lg: 10 }}
      backgroundColor="gray.100"
    >
      {/* -----Category Area and heading---- */}
      <VStack textAlign="left" alignItems="flex-start" spacing={6}>
        <Heading
          as="h2"
          fontSize={{ base: "4xl", lg: "5xl" }}
          fontFamily="Montserrat"
          letterSpacing={{ base: "normal", md: "wide" }}
        >
          Category
        </Heading>
        <Box width="full" px={4}>
          <CategorySlider />
        </Box>
      </VStack>
      {/* ------Products area------- */}
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
          <Button variant="solid" colorScheme="yellow" size="lg">
            All Products
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(Category);
