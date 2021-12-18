import { useState, memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Box,
  InputGroup,
  Input,
  Image,
  InputRightElement,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import CartDrawer from "../individual components/CartDrawer";

const Header = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const router = useRouter();

  // -Functions----
  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchFormSubmission = (e) => {
    e.preventDefault();
    // if there is no search keyword
    if (!searchKeyword || searchKeyword === "" || searchKeyword === " ") return;

    // if there is search keyword then push to search page with the query parameter
    router.push({
      pathname: "/search",
      query: { q: searchKeyword },
    });
  };

  // -----Returning the component------
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
          <form onSubmit={(e) => handleSearchFormSubmission(e)}>
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
              <InputRightElement pointerEvents="auto">
                <IconButton
                  aria-label="search button"
                  icon={<FaSearch />}
                  variant="ghost"
                  onClick={handleSearchFormSubmission}
                />
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
