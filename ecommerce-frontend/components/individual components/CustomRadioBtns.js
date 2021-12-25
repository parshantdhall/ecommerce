import { Box, useRadio } from "@chakra-ui/react";

const CustomRadioBtns = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return (
    <Box as="label">
      <input {...input} />

      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        _checked={{
          bg: "yellow.400",
          color: "white",
          borderColor: "yellow.400",
          fontWeight: "bold",
        }}
        px={4}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default CustomRadioBtns;
