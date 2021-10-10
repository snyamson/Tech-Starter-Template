import { Box, Text, Image, Stack } from "@chakra-ui/react";

const FeatureItem = ({ title, content, imgUrl, left }) => {
  return (
    <Stack
      alignItems="center"
      spacing={{ base: "3.5rem", md: "1rem", lg: "13.25rem" }}
      direction={{
        base: "column-reverse",
        md: left ? "row-reverse" : "row",
      }}
      mt="6.18rem"
      // bg="teal.400"
      p="4"
    >
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text mb="5" fontSize="md" fontWeight="bold" color="black">
          {title}
        </Text>
        <Text w="23rem" textAlign="center" fontSize="md" color="text.800">
          {content}
        </Text>
      </Box>

      <Image src={imgUrl} />
    </Stack>
  );
};

export default FeatureItem;

FeatureItem.defaultProps = {
  title: "Your title here",
  content:
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.",
  imgUrl: "/assets/feature-1.svg",
  left: false,
};
