import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Input,
  Button,
  useDisclosure,
  Divider,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { BiShoppingBag } from "react-icons/bi";
import CartProduct from "./CartProduct";

const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Cart</DrawerHeader>

          <DrawerBody>
            {/* * TODO: Add Cart product Here!!! */}
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </DrawerBody>

          <DrawerFooter>
            <VStack>
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
              <Button size="lg" backgroundColor="black" color="white">
                PROCEED TO CHECKOUT
              </Button>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default React.memo(CartDrawer);
