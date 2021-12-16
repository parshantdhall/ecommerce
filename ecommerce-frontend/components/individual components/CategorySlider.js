import React from "react";
import Link from "next/link";
import { Box, VStack, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

const CategorySlider = () => {
  return (
    <Box aria-label="select category" width="full" cursor="grab">
      <Swiper spaceBetween={100} slidesPerView={"auto"}>
        <SwiperSlide>
          <SliderComponent isActive={true} imgSrc="/shoe.svg" catText="Shoes" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderComponent imgSrc="/jewel2.svg" catText="Jewelery" />
        </SwiperSlide>
        <SwiperSlide>
          <SliderComponent imgSrc="/jewel.svg" catText="Hello" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
const SliderComponent = ({ isActive, imgSrc, catText }) => {
  return (
    <Link href="#" passHref title="category link">
      <VStack cursor="pointer" width="45px">
        <Image alt="shirt" src={imgSrc} />
        <Text
          as="p"
          className="text"
          color={isActive ? "orange.400" : "gray.600"}
          fontWeight="bold"
        >
          {catText}
        </Text>
      </VStack>
    </Link>
  );
};

export default React.memo(CategorySlider);
