import { Box, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const LeftSideBar = () => {
  return (
    <Box w="full" h="full" py={4}>
      <VStack spacing={8}>
        {/* First part */}
        <VStack spacing={4} alignItems="flex-start">
          <Link href="#" passHref>
            <Text
              as="p"
              fontWeight="bold"
              fontFamily="Quicksand"
              fontSize="sm"
              cursor="pointer"
            >
              All Categories
            </Text>
          </Link>

          <Link href="#" passHref>
            <Text
              as="p"
              color="gray.500"
              fontFamily="Quicksand"
              fontSize="sm"
              cursor="pointer"
            >
              Shoes
            </Text>
          </Link>

          <Link href="#" passHref>
            <Text
              as="p"
              color="gray.500"
              fontFamily="Quicksand"
              fontSize="sm"
              cursor="pointer"
            >
              Jewelry
            </Text>
          </Link>
        </VStack>
        {/* Second part */}
        <VStack spacing={4} alignItems="flex-start">
          <Link href="#" passHref>
            <Text
              as="p"
              fontWeight="bold"
              fontFamily="Quicksand"
              fontSize="sm"
              cursor="pointer"
            >
              All Designers
            </Text>
          </Link>

          <Link href="#" passHref>
            <Text
              as="p"
              color="gray.500"
              fontFamily="Quicksand"
              fontSize="sm"
              cursor="pointer"
            >
              Parshant
            </Text>
          </Link>

          <Link href="#" passHref>
            <Text
              as="p"
              color="gray.500"
              fontFamily="Quicksand"
              fontSize="sm"
              cursor="pointer"
            >
              Dhall
            </Text>
          </Link>
        </VStack>
      </VStack>
    </Box>
  );
};

export default LeftSideBar;
