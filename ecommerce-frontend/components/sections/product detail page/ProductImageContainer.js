import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { shimmer, toBase64 } from "../../../lib/imageLoading";

const ProductImageContainer = () => {
  return (
    <Box w="full" h="full" p={3}>
      <Box
        w="full"
        height="460px"
        role="image container"
        pos="relative"
        overflow="hidden"
        borderRadius="lg"
      >
        <Image
          src="/footwear.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 80%"
          aria-label="Featured post image."
          quality={80}
          alt="product Image"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </Box>
    </Box>
  );
};

export default ProductImageContainer;
