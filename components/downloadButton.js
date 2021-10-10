import { Box, Text } from "@chakra-ui/react";

const DownloadButton = () => {
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
        Download Your Free Theme
      </Text>
    </Box>
  );
};

export default DownloadButton;
