import { Box, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";
import {
  IoLogoGithub,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoYoutube,
  IoLogoLinkedin,
  IoLogoRss,
} from "react-icons/io5";

const Footer = () => {
  const today = new Date();

  return (
    <Box as="footer" w="100%" bg="brand.50" pt="10" pb="8">
      <VStack alignSelf="center" spacing="5">
        <HStack alignSelf="center">
          <Image src="/assets/logo.svg" />
          <Text fontSize="xl">Starter</Text>
        </HStack>
        <HStack spacing={10}>
          <Link color="link.900">Home</Link>
          <Link color="link.900">About</Link>
          <Link color="link.900">Docs</Link>
          <Link color="link.900">Github</Link>
        </HStack>
        <HStack>
          <IoLogoGithub cursor="pointer" color="#858B9B" size="25" />
          <IoLogoFacebook cursor="pointer" color="#858B9B" size="25" />
          <IoLogoTwitter cursor="pointer" color="#858B9B" size="25" />
          <IoLogoYoutube cursor="pointer" color="#858B9B" size="25" />
          <IoLogoLinkedin cursor="pointer" color="#858B9B" size="25" />
          <IoLogoRss cursor="pointer" color="#858B9B" size="25" />
        </HStack>
        <HStack>
          <Text color="text.800" textAlign="center" px={{ base: "10" }}>
            &copy; copyright {today.getFullYear()} Tech | Nextjs Starter.
            Powered with ♥ by <Link color="brand.900">InfoTech</Link>
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;
