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
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        _checked={{
          bg: bgColor,
          color: "white",
          borderColor: bgColor,
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
