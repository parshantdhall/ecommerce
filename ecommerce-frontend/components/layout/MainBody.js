import { Box } from "@chakra-ui/react";
import Category from "../sections/Category";
import HeroSlider from "../sections/HeroSlider";

const MainBody = ({ productsData, categoriesData }) => {
  return (
    <Box as="main">
      <HeroSlider />
      <Category productsData={productsData} categoriesData={categoriesData} />
    </Box>
  );
};

export default MainBody;
