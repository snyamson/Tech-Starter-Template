import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import FeatureItem from "./featureItem";
import { features } from "../database/mockData";

const Features = () => {
  return (
    <Box as="main" bg="white" w="100%">
      <Flex align="center" justify="space-around" direction="column" pt="4rem">
        <VStack spacing="8">
          <Heading color="text.900">Your title here</Heading>
          <Text
            textAlign="center"
            px={{ base: "10" }}
            w={{ base: null, md: null, lg: "51.87rem" }}
            color="text.800"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum
            dolor sit amet.
          </Text>
        </VStack>
        <VStack spacing="8.125rem">
          {features.map(({ id, title, content, imgUrl, left }) => (
            <FeatureItem
              key={id}
              title={title}
              content={content}
              imgUrl={`/assets/${imgUrl}.svg`}
              left={left}
            />
          ))}
        </VStack>
      </Flex>
    </Box>
  );
};

export default Features;
