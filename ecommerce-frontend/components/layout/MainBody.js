import { Box } from "@chakra-ui/react";
import Category from "../sections/Category";
import HeroSlider from "../sections/HeroSlider";

const MainBody = () => {
  return (
    <Box as="main">
      <HeroSlider />
      <Category />
    </Box>
  );
};

export default MainBody;
