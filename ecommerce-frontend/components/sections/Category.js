import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import CategorySlider from "../individual components/CategorySlider";

const Category = () => {
  return (
    <Box
      as="section"
      role="category section"
      p={{ base: 5, md: 7, lg: 10 }}
      backgroundColor="gray.100"
    >
      <VStack textAlign="left" alignItems="flex-start" spacing={6}>
        <Heading
          as="h2"
          fontSize={{ base: "4xl", lg: "5xl" }}
          fontFamily="Montserrat"
          letterSpacing="wide"
        >
          Category
        </Heading>
        <Box width="full" px={4}>
          <CategorySlider />
        </Box>
      </VStack>
    </Box>
  );
};

export default React.memo(Category);
