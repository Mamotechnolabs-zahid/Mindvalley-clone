import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const AutoCarousel = () => {
  // Image data for the carousel
  const topImages = [
    { src: "https://storyblok-cdn.mindvalley.com/f/60579/2400x1080/213185aa01/be_featurebanner_wide.jpg?quality=60&auto=webp&dpr=1.25&width=512", alt: "Vishen" },
    { src: "https://storyblok-cdn.mindvalley.com/f/60579/2400x1080/413d591a9d/tygtj_featurebanner_wide.jpg?quality=60&auto=webp&dpr=1.25&width=512", alt: "" },
    { src: "https://storyblok-cdn.mindvalley.com/f/60579/2400x1080/16d30174c1/sums_featurebanner_wide.jpg?quality=60&auto=webp&dpr=1.25&width=512", alt: "" },
    { src: "https://storyblok-cdn.mindvalley.com/f/60579/2400x1080/04ac11c163/5rfl_featurebanner_wide.jpg?quality=60&auto=webp&dpr=1.25&width=512", alt: "" },
    { src: "https://storyblok-cdn.mindvalley.com/f/60579/2400x1080/43e563c7be/ats_featurebanner_wide.jpg?quality=60&auto=webp&dpr=1.25&width=512", alt: "" },
  ];

  const bottomImages = [
    { src: "https://storyblok-cdn.mindvalley.com/f/60579/2400x1080/abf4c47ec1/ap_author_featurebanner_wide.jpg?quality=60&auto=webp&dpr=1.25&width=512", alt: "Jade" },
    { src: "https://storyblok-cdn.mindvalley.com/f/60579/2400x1080/aa7e390e6a/sai_featurebanner_wide.jpg?quality=60&auto=webp&dpr=1.25&width=512", alt: "" },
    { src: "https://storyblok-cdn.mindvalley.com/f/60579/2400x1080/424aec9241/du_featurebanner_wide.jpg?quality=60&auto=webp&dpr=1.25&width=512", alt: "" },
    { src: "https://storyblok-cdn.mindvalley.com/f/60579/2400x1080/6d6f3cba8e/bfi_featurebanner_wide.jpg?quality=60&auto=webp&dpr=1.25&width=512", alt: "" },
    { src: "https://storyblok-cdn.mindvalley.com/f/60579/2400x1080/f5a5582af6/bwfl_featurebanner_wide.jpg?quality=60&auto=webp&dpr=1.25&width=512", alt: "" },
    { src: "https://storyblok-cdn.mindvalley.com/f/60579/2400x1080/a8fadea48e/meq_featurebanner_wide.jpg?quality=60&auto=webp&dpr=1.25&width=512", alt: "" },
  ];

  // Duplicate images to create infinite loop effect
  const duplicatedTopImages = [...topImages, ...topImages];
  const duplicatedBottomImages = [...bottomImages, ...bottomImages];

  return (
    <Box position="relative" overflow="hidden" className="relative overflow-hidden" py={8}>
      <Box 
        className="mv-auto-carousel"
        display="grid"
        gap={{ base: "16px", lg: "24px" }}
        overflow="hidden"
      >
        {/* Top Strip */}
        <Box 
          id="stripFlexTop"
          display="flex"
          gap={{ base: "16px", lg: "24px" }}
          animation="scroll 45s linear infinite"
          width="max-content"
          sx={{
            '@keyframes scroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
          }}
        >
          {duplicatedTopImages.map((img, index) => (
            <Box 
              key={`top-${index}`}
              className="--item"
              flex="0 0 auto"
              width={{ base: "240px", md: "320px", lg: "500px" }}
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width="100%"
                height={{ base: "auto", md: "180px", lg: "220px" }}
                objectFit="cover"
                loading="lazy"
                borderRadius="lg"
              />
            </Box>
          ))}
        </Box>

        {/* Bottom Strip - Faster animation */}
        <Box 
          id="stripFlexBottom"
          display="flex"
          gap={{ base: "16px", lg: "24px" }}
          animation="scroll 35s linear infinite" // Faster animation (20s vs 30s)
          width="max-content"
          mt={{ base: "16px", lg: "24px" }}
          sx={{
            '@keyframes scroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
          }}
        >
          {duplicatedBottomImages.map((img, index) => (
            <Box 
              key={`bottom-${index}`}
              className="--item"
              flex="0 0 auto"
              width={{ base: "240px", md: "320px", lg: "500px" }}
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width="100%"
                height={{ base: "auto", md: "180px", lg: "220px" }}
                objectFit="cover"
                loading="lazy"
                borderRadius="lg"
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AutoCarousel;