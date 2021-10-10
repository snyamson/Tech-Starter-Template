import { Box, Text } from "@chakra-ui/react";

const CtoButton = () => {
  return (
    <Box
      as="button"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="brand.900"
      px="12"
      py="3"
      borderRadius="md"
      mt="8"
    >
      <Text color="white" fontWeight="bold">
        Get Started
      </Text>
    </Box>
  );
};

export default CtoButton;
