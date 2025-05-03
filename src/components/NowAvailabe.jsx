import React from "react";
import { Box, Hide, Text } from "@chakra-ui/react";


const NowAvailable = () => {

    return(
        <>
         {/* Header Section */}
            <Box px={{ base: 4, md: 16 }} py={12} maxW="7xl" mx="auto" zIndex={20} position="relative">
              <Text
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="bold"
                color="blue.300"
                mb={4}
              >
                Now available
              </Text>
        
              <Text
                as="h2"
                fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}
                fontWeight="semibold"
                color="black"
                lineHeight="short"
                maxW="2xl"
                mb={6}
              >
                Transform your life on mobile, desktop and Apple Vision Pro
              </Text>
        
              <Hide below="md">
                <Text fontSize="lg" color="gray.600" maxW="2xl">
                Whether you're on the go, in the comfort of your own home, 
                or immersed in a revolutionary virtual environment, you have the 
                flexibility to learn and grow whenever and wherever you choose.
                </Text>
              </Hide>
            </Box>
            </>
    );
};

export default NowAvailable;