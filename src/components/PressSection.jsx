// components/PressSection.tsx
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    Image,
    AspectRatio,
  } from '@chakra-ui/react';
  
  const PressSection = () => {
    return (
      <Box py={16} px={4} className="bg-white">
        <Container maxW="7xl" textAlign="center">
          {/* Text Section */}
          <VStack spacing={4} mb={10}>
            <Heading size="md" fontWeight="semibold" fontSize="2xl">What the press says</Heading>
            <Heading size="3xl" fontWeight="bold" w={{ base: '100%', md: '5/6' }} maxW="4xl" mb="4" mx="auto">
              The world's most effective transformation platform
            </Heading>
            <Text w={{ base: '100%', md: '4/5' }} maxW="3xl" mx="auto" mb="7" fontSize="lg" color="gray.700">
              From leading media platforms like CNN, CBS to influential voices like Jay Shetty and
              Impact Theory, Mindvalley is recognized worldwide for empowering people to transform
              their mind, body, and soul—unlocking their fullest potential and leading extraordinary lives.
            </Text>
          </VStack>
  
          {/* Video Section */}
          <Box maxW="940px" mx="auto" mb={12}>
            <AspectRatio ratio={16 / 9} borderRadius="lg" overflow="hidden">
              <video
                autoPlay
                playsInline
                muted
                preload="auto"
                controls
                poster="https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1.25,f_auto,fl_lossy,q_auto,w_940/https://cdn.mindvalley.com/asset/7d8a3d4e-ddc9-4d43-93a3-c27541d35678/Embrace_Your_Energy_Body_With_Jeffrey_Allen_-_Mindvalley_Masterclass_Trailer_thumbnail.png"
                src="https://a.storyblok.com/f/60579/x/26c258460e/16x9-mindvalley-pr-v2-2025.mp4"
              />
            </AspectRatio>
          </Box>
  
          {/* Cards Aligned with Video */}
          <Box maxW="940px" mx="auto">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {/* Card 1 */}
              <Box borderRadius="lg" overflow="hidden" boxShadow="md" bg="white">
                <Image
                  src="https://storyblok-cdn.mindvalley.com/f/60579/1944x864/fab88d7982/card-cbs.webp?quality=60&auto=webp&dpr=1.25&width=456"
                  alt="CBS Logo"
                  objectFit="cover"
                  width="100%"
                  className="rounded-t-lg"
                />
                <Box p={5}>
                  <Text fontWeight="bold" fontSize="lg" mb={3}>
                    Mindvalley brings together cutting-edge technology and timeless wisdom
                  </Text>
                  <Text color="gray.600">
                    Featured globally in Apple Stores, Mindvalley brings together cutting-edge technology and timeless
                    wisdom, offering you tools to master meditation, relationships, fitness, and even life’s biggest challenges.
                  </Text>
                </Box>
              </Box>
  
              {/* Card 2 */}
              <Box borderRadius="lg" overflow="hidden" boxShadow="md" bg="white">
                <Image
                  src="https://storyblok-cdn.mindvalley.com/f/60579/1944x864/5550a0ad1c/card-cnn.webp?quality=60&auto=webp&dpr=1.25&width=456"
                  alt="CNN Logo"
                  objectFit="cover"
                  width="100%"
                  className="rounded-t-lg"
                />
                <Box p={5}>
                  <Text fontWeight="bold" fontSize="lg" mb={3}>
                    Mindvalley brings together cutting-edge technology and timeless wisdom
                  </Text>
                  <Text color="gray.600">
                    Featured globally in Apple Stores, Mindvalley brings together cutting-edge technology and timeless
                    wisdom, offering you tools to master meditation, relationships, fitness, and even life’s biggest challenges.
                  </Text>
                </Box>
              </Box>
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default PressSection;
  