import React from "react";
import Link from "next/link";
import { Box, VStack, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

const CategorySlider = () => {
  return (
    <Box aria-label="select category" width="full" cursor="grab">
      <Swiper spaceBetween={100} slidesPerView={"auto"}>
        <SwiperSlide>
          <SliderComponent isActive={true} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderComponent />
        </SwiperSlide>
        <SwiperSlide>
          <SliderComponent />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
const SliderComponent = ({ isActive }) => {
  return (
    <Link href="#" passHref title="category link">
      <VStack cursor="pointer">
        <Image alt="shirt" src="/shoe.svg" />
        <Text
          as="p"
          className="text"
          color={isActive ? "orange.400" : "gray.800"}
          fontWeight="bold"
        >
          Shoes
        </Text>
      </VStack>
    </Link>
  );
};

export default React.memo(CategorySlider);
