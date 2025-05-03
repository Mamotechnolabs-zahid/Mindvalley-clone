import { Button, Flex, Stack, Text, Box } from '@chakra-ui/react';
import BackgroundImage from "../assets/header-bg.webp"

const HeroSection = () => {
  return (
    <Box
    backgroundImage={`url(${BackgroundImage})`}
    backgroundSize="cover"
    backgroundPosition="center"
      py={{ base: 16, md: 24 }}
      px={4}
    >
      <Flex
        direction="column"
        align="center"
        textAlign="center"
        maxW="5xl"
        mx="auto"
      >
        <Text
          fontSize={{ base: '4xl', md: '7xl' }}
          fontWeight="extrabold"
          color="white"
          className=" leading-none"
        >
          A better you <br /> every day
        </Text>

        <Text
          fontSize={{ base: 'lg', md: '3xl' }}
          color="white"
          mt={6}
          maxW="4xl"
        >
          Be part of the world’s most powerful life transformation platform
        </Text>

        <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} mt={8}>
          <Button
            colorScheme="purple"
            bg="white"
            color="purple.500"
            size="lg"
            fontWeight="semibold"
            borderRadius="full"
            _hover={{ bg: 'gray.100' }}
          >
            Become a member
          </Button>
          <Button
            variant="outline"
            color="white"
            borderColor="white"
            borderRadius="full"
            size="lg"
            fontWeight="semibold"
            _hover={{ bg: 'whiteAlpha.200' }}
          >
            Explore programs
          </Button>
        </Stack>

        <Box mt={10} w="full" maxW="960px" aspectRatio={16 / 9}>
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with your video URL
            title="Hero Video"
            className="w-full h-full rounded-xl"
            allowFullScreen
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
