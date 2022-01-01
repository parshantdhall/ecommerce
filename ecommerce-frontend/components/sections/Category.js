import React from "react";
import { Box, Heading, VStack, useMediaQuery } from "@chakra-ui/react";
import CategorySlider from "../individual components/CategorySlider";
import ProductGrid from "../individual components/ProductGrid";

const Category = ({ productsData, categoriesData }) => {
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
      <ProductGrid productsData={productsData}  />
    </Box>
  );
};

export default React.memo(Category);
