import {
  Container,
  Heading,
  Text,
  VStack,
  useRadioGroup,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import ConvertPostBody from "../../../lib/ConvertPostBody";
import CustomRadioBtns from "../../individual components/CustomRadioBtns";

const ProductDescContainer = ({ productData }) => {
  // COnfiguring the Size Avilable radios Group
  const { getRootProps: getRootPropsSize, getRadioProps: getRadioPropsSize } =
    useRadioGroup({
      name: "Sizes Available",
      defaultValue: "S",
      onChange: console.log("hello"),
    });

  const group = getRootPropsSize();

  //  const handleSizeSelection = ()=> {

  //}

  // function to create the radios btns for sizes and colors
  // here object could be colorsAvailable object or sizeAvaible Object
  const objectToArrayConversion = (obj) => {
    return Object.entries(obj);
  };

  const descriptionText =
    productData.productDescription && productData.productDescription.raw
      ? productData.productDescription.raw
      : { children: [] };

  const checkProductOnSale =
    productData && productData.isProductOnSale
      ? productData.isProductOnSale
      : false;
  return (
    <Container py={4} maxW="container.xl" fontFamily="Montserrat">
      <VStack>
        <Heading
          as="h1"
          textTransform="capitalize"
          fontFamily="Merriweather"
          textAlign="center"
        >
          {productData && productData.productTitle
            ? productData.productTitle
            : "Product Title"}
        </Heading>
        {/* product pricing */}
        <HStack>
          <Text
            fontWeight="bold"
            letterSpacing={1}
            textDecoration={checkProductOnSale ? "line-through" : ""}
            color={checkProductOnSale ? "gray.400" : "black"}
          >
            <Text
              as="span"
              color={checkProductOnSale ? "gray.400" : "yellow.400"}
            >
              $
            </Text>
            {productData && productData.productPrice
              ? productData.productPrice
              : "not mentioned"}
          </Text>
          {checkProductOnSale ? (
            <Text fontWeight="bold" letterSpacing={1}>
              <Text as="span" color="yellow.400">
                $
              </Text>{" "}
              {productData && productData.productSalePrice
                ? productData.productSalePrice
                : "not mentioned"}
            </Text>
          ) : (
            ""
          )}
        </HStack>
      </VStack>

      {/* ----SIze----- */}
      {productData.sizeAvailable && productData.sizeAvailable != null ? (
        <VStack spacing={3} alignItems="left" my={4}>
          <Text fontWeight="bold">Select Size</Text>
          <HStack {...group}>
            {objectToArrayConversion(productData.sizeAvailable).map((size) => {
              const value = size[0];
              const radio = getRadioPropsSize({ value });
              return (
                <CustomRadioBtns
                  key={value}
                  {...radio}
                  numberOfItemsAvail={size[1]}
                >
                  {value}
                </CustomRadioBtns>
              );
            })}
          </HStack>
        </VStack>
      ) : (
        ""
      )}

      {/* --------Color------ */}
      <VStack spacing={3} alignItems="left" my={4}>
        <Text fontWeight="bold">Select Color</Text>
        <HStack {...group}>
          {/* {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <CustomRadioBtns key={value} {...radio}>
                {value}
              </CustomRadioBtns>
            );
          })} */}
        </HStack>
      </VStack>

      {/* ----Description------ */}
      <Accordion allowToggle defaultIndex={0}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                fontWeight="bold"
                letterSpacing={1}
              >
                Description
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <ConvertPostBody postcontent={descriptionText} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};
export default ProductDescContainer;
