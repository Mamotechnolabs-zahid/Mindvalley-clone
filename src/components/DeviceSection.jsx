import { Box, Image, Stack, useBreakpointValue } from '@chakra-ui/react';

const DeviceSection = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box className="w-full px-4 py-12 lg:px-16 max-w-7xl mx-auto">
      <Box className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-16">
        {/* Left: Phone */}
        <Box className="flex-shrink-0">
          <Image
            src={
              isDesktop
                ? 'https://storyblok-cdn.mindvalley.com/f/60579/972x1458/af226d6733/mvcom_device-android_d.jpg?quality=60&auto=webp&dpr=1.25&width=456'
                : 'https://storyblok-cdn.mindvalley.com/f/60579/1392x711/d7316b3ecf/mvcom_device-android_m.jpg?quality=60&auto=webp&dpr=1.25&width=auto'
            }
            alt="Phone"
            className="w-[300px] md:w-[360px] lg:w-[420px] xl:w-[480px] h-auto"

          />
        </Box>

        {/* Right: Laptop & Vision Pro */}
        <Stack spacing={8} className="w-full max-w-lg md:max-w-xl lg:max-w-2xl">

          <Image
            src="https://storyblok-cdn.mindvalley.com/f/60579/1382x706/5c44b37f70/mvcom_device-laptop.jpg?quality=60&auto=webp&dpr=1.25&width=648"
            alt="Laptop"
            className="rounded-lg w-full h-auto"
          />
          <Image
            src="https://storyblok-cdn.mindvalley.com/f/60579/1382x705/6beae16d3a/mvcom_device-visionpro.jpg?quality=60&auto=webp&dpr=1.25&width=648"
            alt="Vision Pro"
            className="rounded-lg w-full h-auto"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default DeviceSection;
