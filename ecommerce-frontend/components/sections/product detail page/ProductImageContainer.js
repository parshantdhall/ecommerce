import Image from "next/image";
import { Box, Image as ChakraImage } from "@chakra-ui/react";
import { shimmer, toBase64 } from "../../../lib/imageLoading";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

const ProductImageContainer = ({ productFeaturedImage, productImages }) => {
  return (
    <Box w="full" h="full" p={3}>
      {productImages && productImages.length > 1 ? (
        <Swiper navigation={true} className="mySwiper">
          {productImages.map((img, i) => (
            <SwiperSlide className="customSlider" key={i}>
              <Box
                w="full"
                height="460px"
                role="image container"
                overflow="hidden"
                borderRadius="lg"
              >
                <ChakraImage
                  src={img?.url}
                  alt="featured image"
                  htmlWidth={"100%"}
                  htmlHeight={"100%"}
                  fit="cover"
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Box
          w="full"
          height="460px"
          role="image container"
          pos="relative"
          overflow="hidden"
          borderRadius="lg"
        >
          <Image
            src={`${productFeaturedImage?.url}`}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 80%"
            aria-label="Featured product image."
            quality={80}
            alt="product Image"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
          />
        </Box>
      )}
    </Box>
  );
};

export default ProductImageContainer;
