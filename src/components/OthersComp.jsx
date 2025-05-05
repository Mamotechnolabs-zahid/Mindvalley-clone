import {
    Box,
    Flex,
    Heading,
    Text,
    Input,
    Button,
    InputGroup,
    InputRightElement,
    useBreakpointValue,
  } from "@chakra-ui/react";
  
const MindvalleySection = () => {
    const imageHeight = useBreakpointValue({ base: "auto", md: "512px" });
  
    return (
      <Box
        bgGradient="linear(to-b, #fff5f7, #e0fff4)"
        px={{ base: 4, md: 20 }}
        py={{ base: 10, md: 20 }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          maxW="7xl"
          mx="auto"
          gap={{ base: 10, md: 16 }}
        >
          {/* Left: Image + Caption */}
          <Box
            position="relative"
            borderRadius="2xl"
            overflow="hidden"
            maxH={imageHeight}
            w={{ base: "100%", md: "auto" }}
            boxShadow="lg"
          >
            <img
              src="https://storyblok-cdn.mindvalley.com/f/60579/1536x2300/bddf3ec3ac/04-author-vishen.webp"
              alt="Vishen"
              style={{
                height: "100%",
                maxHeight: "512px",
                width: "auto",
                objectFit: "cover",
                display: "block",
              }}
            />
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              bg="blackAlpha.800"
              py={3}
              px={4}
              textAlign="left"
            >
              <Text fontSize="3xl" fontWeight="extrabold" color="white">
                VISHEN
              </Text>
              <Text fontSize="sm" color="white">
                Founder and CEO of Mindvalley
              </Text>
            </Box>
          </Box>
  
          {/* Right: Text + Email Form */}
          <Box maxW="xl">
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="black"
              lineHeight="short"
              mb={4}
            >
              Become 1% Better Every Day
            </Heading>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              mb={2}
              color="gray.800"
            >
              Upgrade Your Mind. Elevate Your Life. Shape the Future.
            </Text>
            <Text fontSize="md" color="gray.600" mb={6}>
              Welcome to Mindvalley Daily. We’ll send you the latest breakthroughs
              in personal growth, performance, and transformation—straight to your inbox
            </Text>
  
            {/* Email Form */}
            <Flex
              direction={{ base: "column", sm: "row" }}
              gap={4}
              mb={3}
            >
              <Input
                type="email"
                placeholder="Your email address"
                bg="white"
                size="lg"
                borderRadius="md"
                boxShadow="sm"
                _placeholder={{ color: "gray.500" }}
                flex="1"
              />
              <Button
                colorScheme="purple"
                size="lg"
                px={8}
                borderRadius="full"
                fontWeight="bold"
              >
                Subscribe
              </Button>
            </Flex>
  
            <Text fontSize="xs" color="gray.500">
              Your data is safe with us. Unsubscribe anytime.
            </Text>
          </Box>
        </Flex>
      </Box>
    );
  }
export default MindvalleySection;
  