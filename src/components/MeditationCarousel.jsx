import React from 'react';
import { Box, Image, Hide, Text } from '@chakra-ui/react';

const MeditationCarousel = () => {
  // Top strip images
  const topImages = [
    'https://storyblok-cdn.mindvalley.com/f/60579/316x316/cb80e9b65d/meditation_negative-thoughts-reset.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/316x316/76aea91421/meditation_quick-stress-worry-releaser.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/316x316/29d0209c50/meditation_self-motivation.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/316x316/d8ab4e50cc/meditation_powerup-motivation.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/316x316/c75f54dc73/meditation_great-day-ahead.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/315x315/11a2a9da2a/meditation_manifesting-ideal-reality.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/314x315/1cf7995c8f/meditation_energetic-foreplay.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/318x314/c2f46e432d/meditation_total-mind-relaxation.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/315x315/57e0c22af6/meditation_deep-relaxation.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/314x315/1b70132c92/meditation_prepare-for-date.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/315x315/ed2c0ada51/meditation_creative-visualisation-career.jpg?quality=60&auto=webp&dpr=1.25&width=146'
  ];

  // Bottom strip images
  const bottomImages = [
    'https://storyblok-cdn.mindvalley.com/f/60579/316x316/d28158814f/meditation_movation-to-get-fit.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/316x316/f5b3b89d35/meditation_powerful-comm.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/316x316/55f91aff2f/meditation_confidence-booster.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/316x316/41c5f681de/meditation_build-rapport.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/316x316/713a2790f0/meditation_feel-calm-and-relax.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/314x314/785eab0f9a/meditation_magical-forest.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/316x314/37a5532f17/meditation_sleep.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/315x314/02b2c02bef/meditation_overcoming-fear-anxiety.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/315x314/f551121168/meditation_social-energizer.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/316x315/5093836d12/meditation_releasingstress3x3.jpg?quality=60&auto=webp&dpr=1.25&width=146',
    'https://storyblok-cdn.mindvalley.com/f/60579/314x314/ed38e59186/meditation_hooponopono.jpg?quality=60&auto=webp&dpr=1.25&width=146'
  ];

  const duplicatedTopImages = [...topImages, ...topImages];
  const duplicatedBottomImages = [...bottomImages, ...bottomImages];

  return (
    
    <Box bg="white" className="relative min-h-fit">
    {/* Header Section */}
    <Box px={{ base: 4, md: 16 }} py={12} maxW="7xl" mx="auto" zIndex={20} position="relative">
      <Text
        textTransform="uppercase"
        fontSize="sm"
        fontWeight="bold"
        color="blue.300"
        mb={4}
      >
        immersive experiences
      </Text>

      <Text
        as="h2"
        fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}
        fontWeight="semibold"
        color="black"
        lineHeight="short"
        mb={6}
      >
        1,000+ customised tracks to elevate <br className="hidden md:block" />
        your mindset and feelings
      </Text>

      <Hide below="md">
        <Text fontSize="lg" color="gray.600" maxW="2xl">
          With a push of a button — experience brain changing hypnotic audios,
          sound healings, meditations and instant mood elevations. Take charge of your mind.
        </Text>
      </Hide>
    </Box>

    {/* Phone + Carousel Strip Container */}
    <Box position="relative" py="60px" overflow="hidden">
      {/* Center Phone Image - smaller size */}
      <Image
        src="https://storyblok-cdn.mindvalley.com/f/60579/1116x1528/be646c55db/mvcom_mm-meditation-iphone.png?quality=60&auto=webp&dpr=1.25&width=1521"
        width={{ base: '260px', md: '300px' }}
        height="auto"
        position="absolute"
        top="5px"
        left="50%"
        transform="translateX(-50%)"
        zIndex={10}
      />

      {/* Top Image Strip */}
      <Box
        display="flex"
        gap={4}
        width="max-content"
        animation="scrollTop 45s linear infinite"
        sx={{
          '@keyframes scrollTop': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        }}
      >
        {duplicatedTopImages.map((src, idx) => (
          <Box key={idx} flex="0 0 auto" width="146px">
            <Image
              src={src}
              width="146px"
              height="146px"
              objectFit="cover"
              borderRadius="md"
              loading="lazy"
            />
          </Box>
        ))}
      </Box>

      {/* Bottom Image Strip */}
      <Box
        display="flex"
        gap={4}
        width="max-content"
        animation="scrollBottom 35s linear infinite"
        mt={6}
        sx={{
          '@keyframes scrollBottom': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        }}
      >
        {duplicatedBottomImages.map((src, idx) => (
          <Box key={idx} flex="0 0 auto" width="146px">
            <Image
              src={src}
              width="146px"
              height="146px"
              objectFit="cover"
              borderRadius="md"
              loading="lazy"
            />
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
  );
};

export default MeditationCarousel;