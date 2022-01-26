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
  Spacer,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { cartDataContext } from "../../global states/CartStateContext";

const CartProduct = ({ product }) => {
  const cartData = useContext(cartDataContext);

  return (
    <Box w="full">
      <VStack spacing={3} my={3} w="full">
        {/* product info area */}
        <HStack spacing={3} w="full">
          {/* Product Image */}
          <Box
            role="image container"
            height="80px"
            width="100px"
            pos="relative"
            overflow="hidden"
            borderRadius="lg"
          >
            <Image
              src={product.imgUrl.url}
              layout="fill"
              objectFit="cover"
              aria-label="Cart Product image."
              quality={80}
              alt="jewel Image"
            />
          </Box>
          {/* Product Desc */}
          <VStack spacing={2} alignItems="flex-start" w="full">
            {/* Product Name and Price */}
            <HStack w="full" justifyContent="space-between">
              <Text as="p" fontWeight="bold">
                {product.title}
              </Text>
              <Text as="p"> ${product.price} </Text>
            </HStack>

            <HStack spacing={3}>
              {/* Product Color */}
              {product.selectedColor ? (
                <HStack>
                  <Text as="p" fontSize="sm">
                    Color
                  </Text>
                  <Tag borderRadius="full">
                    <TagLabel>{product.selectedColor}</TagLabel>
                  </Tag>
                </HStack>
              ) : (
                ""
              )}

              {/* Product Size */}
              {product.selectedSize ? (
                <HStack>
                  <Text as="p" fontSize="sm">
                    Size
                  </Text>
                  <Tag borderRadius="full">
                    <TagLabel fontWeight="bold">
                      {product.selectedSize}
                    </TagLabel>
                  </Tag>
                </HStack>
              ) : (
                ""
              )}
            </HStack>
          </VStack>
        </HStack>
        {/* number of product area */}
        <HStack spacing={4} w="full">
          <IconButton
            aria-label="remove product"
            onClick={() => cartData.deleteFromCart(product)}
            icon={<FaTimes />}
          />
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
