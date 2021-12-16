import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import { shimmer, toBase64 } from "../../lib/imageLoading";

const Product = () => {
  return (
    <Link href="#" passHref title="link to product details">
      <Box
        _hover={{
          boxShadow: "1px 2px 4px rgba(0,0,0,.1),-1px 2px 4px rgba(0,0,0,.1)",
        }}
      >
        <Box
          w="full"
          height="360px"
          role="image container"
          pos="relative"
          overflow="hidden"
          cursor="pointer"
          borderRadius="lg"
          borderBottomRadius="0px"
        >
          <Image
            src="/footwear.jpg"
            layout="fill"
            objectFit="cover"
            aria-label="Featured post image."
            quality={80}
            alt="product Image"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
          />
          <Box w="50px" h="50px" position="absolute" top="20px" right="20px">
            <Image
              src="/sale.svg"
              layout="fill"
              objectFit="cover"
              quality={100}
              alt="Sale Tag"
            />
          </Box>
        </Box>
        <Box
          backgroundColor="white"
          w="full"
          p={3}
          borderRadius="lg"
          borderTopRadius="0px"
        >
          <HStack justifyContent="space-between" textAlign="center">
            <VStack spacing={2} alignItems="flex-start">
              <Text as="p" fontWeight="bold" fontFamily="Montserrat">
                Product Name
              </Text>
              {/* ---Price-- */}
              <HStack>
                <Text
                  as="p"
                  fontFamily="Merriweather"
                  textDecoration="line-through"
                  color="gray.400"
                >
                  $200
                </Text>

                <Text as="p" fontFamily="Merriweather">
                  $200
                </Text>
              </HStack>
            </VStack>
            <Box>
              <IconButton
                aria-label="Add to cart Button"
                icon={<FaCartPlus />}
                colorScheme="red"
              />
            </Box>
          </HStack>
        </Box>
      </Box>
    </Link>
  );
};

export default React.memo(Product);
