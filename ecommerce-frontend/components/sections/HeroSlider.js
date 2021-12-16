import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";

const HeroSlider = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Box as="section" width="full" cursor="grab" p={3}>
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <ProductSlide />
        </SwiperSlide>
        <SwiperSlide>
          <ProductSlide />
        </SwiperSlide>
        <SwiperSlide>
          <ProductSlide />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

const ProductSlide = () => {
  const [isGreaterThan900] = useMediaQuery("(min-width: 850px)");
  return (
    <Box
      role="image container"
      height={isGreaterThan900 ? "510px" : "380px"}
      width={isGreaterThan900 ? "700px" : "400px"}
      pos="relative"
      overflow="hidden"
      borderRadius="lg"
      sx={{
        /* These media queries are for the server side rendering
          becoz u cant use the usemediaquery hook at initial load
          */
        "@media screen and (min-width: 900px)": {
          width: "700px",
          height: "510px",
        },
      }}
    >
      <Image
        src="/a1.jpg"
        layout="fill"
        objectFit="cover"
        aria-label="Featured post image."
        quality={80}
        alt="jewel Image"
      />
    </Box>
  );
};

export default HeroSlider;
