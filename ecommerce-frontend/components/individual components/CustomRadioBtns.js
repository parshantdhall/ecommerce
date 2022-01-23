import { Box, useRadio } from "@chakra-ui/react";

const CustomRadioBtns = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const { numberOfItemsAvail } = props;

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  const bgColor = numberOfItemsAvail > 0 ? "yellow.400" : "gray.400";
  return (
    <Box as="label">
      <input {...input} />

      <Box
        {...checkbox}
        cursor={numberOfItemsAvail > 0 ? "pointer" : "not-allowed"}
        borderWidth="1px"
        borderRadius="md"
        _checked={{
          bg: bgColor,
          color: numberOfItemsAvail > 0 ? "white" : "black",
          borderColor: bgColor,
          fontWeight: "bold",
        }}
        bg={numberOfItemsAvail > 0 ? "white" : "gray.400"}
        px={4}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default CustomRadioBtns;
