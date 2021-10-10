import { Flex, HStack, VStack, Button, Text, Stack } from "@chakra-ui/react";
import React from "react";
import CtoButton from "./ctoButton";

const Cto = () => {
  return (
    <Flex justify="space-around" mt="5rem" mb="6rem">
      <HStack
        bg="brand.100"
        p="10"
        borderRadius="md"
        spacing={{ base: null, md: null, lg: "10rem" }}
      >
        <VStack align="flex-start">
          <Text color="black" fontWeight="medium" fontSize="2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
          <Text color="brand.900" fontWeight="medium" fontSize="2xl">
            Start your Free Trial.
          </Text>
        </VStack>
        <CtoButton />
      </HStack>
    </Flex>
  );
};

export default Cto;
