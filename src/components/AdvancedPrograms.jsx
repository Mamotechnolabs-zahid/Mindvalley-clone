// AdvancedPrograms.tsx
import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";

const programs = [
  {
    titleLg: "Mindvalley Mastery Degrees",
    titleSm: "Mindvalley Mastery",
    description:
      "When regular education can’t cope with hot, fast growing skills — Mindvalley is here to put you in the top 0.1% within 4 to 6 months.",
    image:
      "https://storyblok-cdn.mindvalley.com/f/60579/2400x1080/0c8603616c/mvcom_advanced-programs_mastery.jpg",
    buttonText: "Learn more",
    buttonLink:
      "https://www.mindvalley.com/mastery?itm_source=mv.com&itm_campaign=evergreen&otag=mv.com_hp",
  },
  {
    titleLg: "Become a Mindvalley Certified Coach",
    titleSm: "Mindvalley Coach",
    description:
      "Elevate your career with Mindvalley Certified Coach: meaningful work, lucrative opportunities, and flexible freedom. 6,000 new coaches trained annually.",
    image:
      "https://storyblok-cdn.mindvalley.com/f/60579/2400x1080/de0fce8749/mvcom_advanced-programs_certs.jpg",
    buttonText: "Become a coach",
    buttonLink:
      "https://www.mindvalley.com/certs?itm_source=mv.com&itm_campaign=evergreen&otag=mv.com_hp",
  },
  {
    titleLg: "Explore Mindvalley events",
    titleSm: "Mindvalley events",
    description:
      "Embark on enchantment at Mindvalley's award-winning events, where connections, transformations, and wonders converge.",
    image:
      "https://storyblok-cdn.mindvalley.com/f/60579/2400x1080/62927d47bc/mvcom_advanced-programs_events.jpg",
    buttonText: "Learn more",
    buttonLink:
      "https://www.mindvalley.com/events?itm_source=mv.com&itm_campaign=evergreen&otag=mv.com_hp",
  },
];

const AdvancedPrograms = () => {
  return (
    <Box
      className="mv-section__gutter"
      px={{ base: 4, sm: 8, md: 10 }}
      pb="5rem"
      mt="5"
    >
      <Box textAlign="center" mb={6}>
        <Heading as="h2" size="xl" color="gray.700">
          Advanced programs
        </Heading>
        <Text fontSize="lg" color="gray.500" mt={2}>
          by Mindvalley
        </Text>
        <Text
          mt={4}
          mb={6}
          maxW="600px"
          mx="auto"
          fontSize="md"
          color="gray.500"
        >
          Embark on a profound exploration of self with our advanced programs
          and empowering experiences
        </Text>
      </Box>

      <Stack spacing={{ base: 8, lg: 14 }}>
        {programs.map((program, idx) => (
          <Box
            key={idx}
            bg="gray.100"
            rounded="lg"
            overflow="hidden"
            boxShadow="md"
            mx={{ base: 4, md: 6, lg: 16 }}
          >
            <Box p={{ base: 6, lg: 14 }}>
              <Box display={{ base: "block", lg: "none" }}>
                <Heading size="lg" color="gray.700" textAlign="left">
                  {program.titleSm}
                </Heading>
              </Box>
              <Box display={{ base: "none", lg: "block" }}>
                <Heading size="lg" color="gray.700" textAlign={{ base: "center", md: "left" }}>
                  {program.titleLg}
                </Heading>
              </Box>
              <Text
                color="gray.600"
                mt={{ base: 3, lg: 5 }}
                mb={{ base: 5, lg: 6 }}
                display={{ base: "none", md: "block" }}
              >
                {program.description}
              </Text>
              <Button
                as="a"
                href={program.buttonLink}
                target="_blank"
                rel="noreferrer"
                colorScheme="gray"
                variant="outline"
                mt={{ base: 5, lg: 6 }}
              >
                {program.buttonText}
              </Button>
            </Box>
            <Image src={program.image} alt={program.titleSm} width="100%" />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
export default AdvancedPrograms;