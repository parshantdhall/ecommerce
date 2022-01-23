import React, { useContext } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Button,
  useDisclosure,
  Divider,
  VStack,
  HStack,
  Text,
  Center,
} from "@chakra-ui/react";
import { BiShoppingBag } from "react-icons/bi";
import CartProduct from "./CartProduct";
import { cartDataContext } from "../../global states/CartStateContext";
const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // global state
  const cartData = useContext(cartDataContext);

  return (
    <>
      <IconButton
        variant="ghost"
        ref={btnRef}
        aria-label="Cart Button"
        icon={<BiShoppingBag />}
        onClick={onOpen}
        fontSize="28px"
        _hover={{
          background: "none",
        }}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Cart</DrawerHeader>

          {cartData?.localCartData.length > 0 ? (
            <>
              <DrawerBody>
                {cartData.localCartData.map((product) => {
                  <CartProduct {...product} />;
                })}
              </DrawerBody>

              <DrawerFooter>
                <VStack w="full">
                  <HStack justifyContent="space-between" width="full">
                    <Text fontSize="sm">Subtotal</Text>
                    <Text fontSize="sm">$1000.11</Text>
                  </HStack>
                  <HStack justifyContent="space-between" width="full">
                    <Text fontSize="sm">Taxes</Text>
                    <Text fontSize="sm">$11</Text>
                  </HStack>
                  <HStack justifyContent="space-between" width="full">
                    <Text fontSize="sm">Shipping</Text>
                    <Text fontSize="sm">$12</Text>
                  </HStack>
                  <Divider />
                  <HStack justifyContent="space-between" width="full">
                    <Text fontWeight="bold" fontSize="sm">
                      Total
                    </Text>
                    <Text fontWeight="bold" fontSize="sm">
                      $1002.11
                    </Text>
                  </HStack>
                  <Button size="lg" width="80%" colorScheme="yellow">
                    PROCEED TO CHECKOUT
                  </Button>
                </VStack>
              </DrawerFooter>
            </>
          ) : (
            <Center>
              <Text fontWeight="bold">Please add Items to the cart</Text>
            </Center>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartDrawer;
