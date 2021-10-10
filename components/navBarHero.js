import {
  Box,
  Flex,
  Heading,
  Link,
  Image,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import DownloadButton from "./downloadButton";

const NavBarHero = () => {
  return (
    <Box w="100%" h="30rem" bg="brand.50" pt={10}>
      <Flex align="center" justify="space-around">
        <HStack align="center" justify="center">
          <Image
            boxSize="44px"
            objectFit="cover"
            src="/assets/logo-large.png"
            alt="Logo"
          />
          <Heading size="xl" fontWeight="medium">
            Starter
          </Heading>
        </HStack>

        <HStack spacing={10}>
          <Link color="link.900">Github</Link>
          <Link color="link.900">Sign in</Link>
        </HStack>
      </Flex>
      <Flex direction="column" align="center" mt="20">
        <VStack spacing="5">
          <Heading size="xl" color="text.900">
            The Modern Landing page for
          </Heading>
          <Heading size="xl" color="brand.900">
            React developers
          </Heading>
          <Text size="md" color="text.800" marginTop="20px">
            The easiest way to build a React landing page in seconds.
          </Text>
        </VStack>
        <DownloadButton />
      </Flex>
    </Box>
  );
};

export default NavBarHero;
