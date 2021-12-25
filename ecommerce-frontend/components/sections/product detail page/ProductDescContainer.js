import {
  Container,
  Heading,
  Text,
  VStack,
  useRadioGroup,
  HStack,
} from "@chakra-ui/react";
import CustomRadioBtns from "../../individual components/CustomRadioBtns";

const ProductDescContainer = () => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();
  const options = ["react", "vue", "svelte"];

  return (
    <Container py={4} maxW="container.xl" fontFamily="Montserrat">
      <Heading as="h1" fontFamily="Merriweather" textAlign="center">
        This is shoe
      </Heading>

      {/* ----SIze----- */}
      <VStack spacing={3} alignItems="left" my={4}>
        <Text fontWeight="bold">Select Size</Text>
        <HStack {...group}>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <CustomRadioBtns key={value} {...radio}>
                {value}
              </CustomRadioBtns>
            );
          })}
        </HStack>
      </VStack>

      {/* --------Color------ */}
      <VStack spacing={3} alignItems="left" my={4}>
        <Text fontWeight="bold">Select Color</Text>
        <HStack {...group}>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <CustomRadioBtns key={value} {...radio}>
                {value}
              </CustomRadioBtns>
            );
          })}
        </HStack>
      </VStack>

      {/* Here just render the text coming from the backend */}
      <Text>
        The Next.js beanie has arrived! This embroidered beauty has a snug fit
        that ensures you are going to feel cozy and warm whatever you're doing
        This is the description of the tatti product
      </Text>
    </Container>
  );
};

export default ProductDescContainer;
