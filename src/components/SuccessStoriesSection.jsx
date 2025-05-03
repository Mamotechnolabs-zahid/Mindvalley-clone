// components/SuccessStoriesSection.tsx
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    Button,
    Image,
    Link,
    SimpleGrid,
  } from '@chakra-ui/react';
  
  const SuccessStoriesSection = () => {
    return (
      <Box
        as="section"
        py={{ base: 20, md: 24, lg: 32 }}
        className="overflow-hidden min-h-fit"
      >
        <Container maxW="7xl" px={{ base: 4, md: 16 }}>
          <SimpleGrid
            columns={{ base: 1, lg: 12 }}
            gap={{ base: 6, lg: 14 }}
            alignItems="center"
          >
            {/* Left image collage (desktop only) */}
            <Box
              display={{ base: 'none', lg: 'block' }}
              className="-ml-40 col-span-4"
            >
              <Image
                src="https://storyblok-cdn.mindvalley.com/f/60579/1010x1604/3ada6c5e24/mvcom_hp_stories_left.jpg?quality=60&auto=webp&dpr=1.25&width=499"
                alt="Left avatars"
                borderRadius="lg"
                w="100%"
              />
            </Box>
  
            {/* Center Content */}
            <Box className="col-span-12 lg:col-span-4 text-center space-y-5">
              <Heading fontSize="8xl" color="gray.800">
                24,243
              </Heading>
              <Heading fontSize="2xl" mb="4" className='leading-loose' color="gray.600">
                Case studies of success
              </Heading>
              <Text fontSize="lg" color="gray.600" mb="2" display={{ base: 'none', lg: 'block' }}>
                Mindvalley has some of the highest success rates in the world at transforming our
                learners. Browse case studies and stories of success on{' '}
                <Link
                  href="https://stories.mindvalley.com"
                  isExternal
                  color="purple.600"
                  fontWeight="medium"
                >
                  stories.mindvalley.com
                </Link>
                .
              </Text>
              <Button
                as="a"
                href="https://stories.mindvalley.com/?itm_source=mv.com&itm_campaign=evergreen&otag=mv.com_hp"
                target="_blank"
                variant="outline"
                colorScheme="purple"
                size="lg"
                borderRadius="full"
                px={8}
                className="mx-auto"
              >
                Read stories
              </Button>
            </Box>
  
            {/* Right image collage (desktop only) */}
            <Box
              display={{ base: 'none', lg: 'block' }}
              className="-mr-40 col-span-4"
            >
              <Image
                src="https://storyblok-cdn.mindvalley.com/f/60579/1192x1712/1c753e40c5/mvcom_hp_stories_right.jpg?quality=60&auto=webp&dpr=1.25&width=499"
                alt="Right avatars"
                borderRadius="lg"
                w="100%"
              />
            </Box>
          </SimpleGrid>
  
          {/* Mobile-only version of the avatar collage */}
          <Box display={{ base: 'block', lg: 'none' }} mt={10}>
            <Image
              src="https://storyblok-cdn.mindvalley.com/f/60579/1125x694/c1804e2775/mvcom_hp_stories_mobile.jpg?quality=60&auto=webp&dpr=1.25&width=auto"
              alt="Avatars of Mindvalley students"
              borderRadius="lg"
              w="100%"
            />
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default SuccessStoriesSection;
  