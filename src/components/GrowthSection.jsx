import React from "react";
import { Box, Text, Hide } from "@chakra-ui/react";

const GrowthSection = () => {
  return (
    <Box
      className="px-4 mt-6 md:px-16 py-12"
      maxW="7xl"
      mx="auto"
    >
      <Text
        textTransform="uppercase"
        fontSize="sm"
        fontWeight="bold"
        color="blue.300"
        className="tracking-wide"
        mb={4}
      >
        Growth in all areas
      </Text>

      <Text
        as="h2"
        fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}
        fontWeight="semibold"
        className="text-black leading-10"
        mb={6}
      >
        100+ of the world’s top programs for <br className="hidden md:block" />
        personal growth and transformation
      </Text>

      <Hide below="md">
        <Text
          fontSize="lg"
          color="gray.600"
          maxW="2xl"
        >
          Forge lasting transformations in your mind, body, soul, love and career
          with 20-minute micro-coaching sessions each day led by top-tier
          teachers worldwide.
        </Text>
      </Hide>
    </Box>
  );
};

export default GrowthSection;
