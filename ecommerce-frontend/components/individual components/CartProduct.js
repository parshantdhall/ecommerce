import Image from "next/image";
import {
  Box,
  HStack,
  VStack,
  Text,
  Tag,
  TagLabel,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Divider,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";

const CartProduct = () => {
  return (
    <Box w="full">
      <VStack spacing={3} my={3} w="full">
        {/* product info area */}
        <HStack spacing={3} w="full">
          {/* Product Image */}
          <Box
            role="image container"
            height="80px"
            width="80px"
            pos="relative"
            overflow="hidden"
            borderRadius="lg"
          >
            <Image
              src="/footwear.jpg"
              layout="fill"
              objectFit="cover"
              aria-label="Cart Product image."
              quality={80}
              alt="jewel Image"
            />
          </Box>
          {/* Product Desc */}
          <VStack spacing={2} alignItems="flex-start">
            {/* Product Name and Price */}
            <HStack w="full" justifyContent="space-between">
              <Text as="p" fontWeight="bold">
                Product Name
              </Text>
              <Text as="p"> $200 </Text>
            </HStack>

            <HStack spacing={3}>
              {/* Product Color */}
              <HStack>
                <Text as="p" fontSize="sm">
                  Color
                </Text>
                <Tag borderRadius="full">
                  <TagLabel>Black</TagLabel>
                </Tag>
              </HStack>
              {/* Product Size */}
              <HStack>
                <Text as="p" fontSize="sm">
                  Size
                </Text>
                <Tag borderRadius="full">
                  <TagLabel fontWeight="bold">M</TagLabel>
                </Tag>
              </HStack>
            </HStack>
          </VStack>
        </HStack>
        {/* number of product area */}
        <HStack spacing={2} w="full">
          <IconButton aria-label="remove product" icon={<FaTimes />} />
          {/* Note default value will be 1 or number of times user add
            Max will be how much item is remaining in the inventory
            */}
          <NumberInput defaultValue={1} min={1} max={20}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
      </VStack>
      <Divider />
    </Box>
  );
};

export default CartProduct;
