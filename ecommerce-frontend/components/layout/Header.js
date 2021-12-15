import { useState, memo } from "react";
import Link from "next/link";
import {
  Box,
  InputGroup,
  Input,
  Image,
  InputRightElement,
  HStack,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import CartDrawer from "../individual components/CartDrawer";

const Header = () => {
  const [searchKeyword, setSearchKeyword] = useState();

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
    console.log(e.target.value);
  };
  return (
    <Box
      as="header"
      minW="full"
      p={2}
      h="fit-content"
      boxShadow="base"
      position="sticky"
      top="0"
      zIndex="sticky"
      backgroundColor="white"
    >
      <HStack
        spacing={4}
        as="nav"
        alignItems="center"
        justifyContent="space-between"
        mx={4}
      >
        <Box
          pos="relative"
          maxW="60%"
          width={{ base: "50px", md: "70px", lg: "80px" }}
          cursor="pointer"
        >
          <Link href="/" passHref title="go to homepage">
            <Image src="/logo.png" alt="logo" w="full" h="full" />
          </Link>
        </Box>

        {/* --------Search Bar---- */}
        <Box maxWidth="60em" margin="auto" flex="1">
          <form onSubmit={(e) => e.preventDefault()}>
            <InputGroup>
              <Input
                type="text"
                value={searchKeyword}
                placeholder="Search product.."
                aria-label="Search input"
                onChange={handleChange}
                border="none"
                boxShadow="base"
                bgColor="white"
                _placeholder={{
                  color: "gray.300",
                }}
              />
              <InputRightElement pointerEvents="none">
                <FaSearch />
              </InputRightElement>
            </InputGroup>
          </form>
        </Box>
        {/* Cart  logo */}
        <Box cursor="pointer">
          <CartDrawer />
        </Box>
      </HStack>
    </Box>
  );
};

export default memo(Header);
