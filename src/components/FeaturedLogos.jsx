import { Box, Heading, Image, Stack, useBreakpointValue } from "@chakra-ui/react";

const logos = [
  {
    src: "https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_2.0000000298023224,f_auto,fl_lossy,q_auto,w_auto/https://a.storyblok.com/f/60579/229x31/4504f459d4/logo_nyt.svg",
    alt: "New York Times",
    height: "32px",
  },
  {
    src: "https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_2.0000000298023224,f_auto,fl_lossy,q_auto,w_auto/https://a.storyblok.com/f/60579/106x29/edff29df59/logo_forbes.svg",
    alt: "Forbes",
    height: "28px",
  },
  {
    src: "https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_2.0000000298023224,f_auto,fl_lossy,q_auto,w_auto/https://a.storyblok.com/f/60579/178x33/660efad2fd/logo_usa-today.svg",
    alt: "USA Today",
    height: "32px",
  },
  {
    src: "https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_2.0000000298023224,f_auto,fl_lossy,q_auto,w_auto/https://a.storyblok.com/f/60579/166x33/8cf263ffec/logo_entrepreneur.svg",
    alt: "Entrepreneur",
    height: "32px",
  },
  {
    src: "https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_2.0000000298023224,f_auto,fl_lossy,q_auto,w_auto/https://a.storyblok.com/f/60579/107x31/5d683c5c4d/logo-bbc.svg",
    alt: "BBC",
    height: "32px",
  },
  {
    src: "https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_2.0000000298023224,f_auto,fl_lossy,q_auto,w_auto/https://a.storyblok.com/f/60579/94x33/85550dbb85/logo-inc.svg",
    alt: "Inc. Magazine",
    height: "32px",
  },
  {
    src: "https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_2.0000000298023224,f_auto,fl_lossy,q_auto,w_auto/https://a.storyblok.com/f/60579/68x33/74c459c6fe/logo_cnn.svg",
    alt: "CNN",
    height: "32px",
  },
];

const FeaturedLogos = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box id="featured-logos" className="bg-gray-100 py-6 lg:py-10 w-full">
      <Box className="text-center mb-5 text-cool-grey-700">
        <Heading as="h2" fontSize="xl" className="text-gray-700">
          Featured on
        </Heading>
      </Box>

      {isMobile ? (
        <Box className="overflow-hidden w-full">
          <Box
            className="flex gap-6 animate-marquee whitespace-nowrap"
            sx={{
              animation: 'marquee 20s linear infinite',
              '@keyframes marquee': {
                '0%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(-100%)' },
              },
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <Box key={index} className="flex-shrink-0 flex items-center justify-center h-8 px-4">
                <Image src={logo.src} alt={logo.alt} height={logo.height} loading="lazy" />
              </Box>
            ))}
          </Box>
        </Box>
      ) : (
        <Stack
          direction="row"
          spacing={6}
          justify="center"
          align="center"
          wrap="wrap"
        >
          {logos.map((logo, index) => (
            <Box key={index} className="h-8 flex items-center justify-center">
              <Image src={logo.src} alt={logo.alt} height={logo.height} loading="lazy" />
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default FeaturedLogos;
