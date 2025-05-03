import {
    Box,
    Heading,
    Text,
    Button,
    Image,
    Stack,
    useBreakpointValue,
    Avatar,
    AvatarGroup
  } from "@chakra-ui/react";
  
  const BeginJourneySection = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true });
  
    return (
      <Box className="w-full lg:w-4/5 mx-auto py-10 px-4 mt-4">
        {/* Title */}
        <Text
          fontSize="6xl"
          className="text-center font-semibold"
        >
          Begin your journey today
        </Text>
  
        {/* Subtitle */}
        <Text
          fontSize="3xl"
          className="text-center font-semibold text-gray-500 pt-6 pb-7 lg:pt-6 lg:pb-8 leading-none"
        >
          Unlock your fullest potential in any field with only 20-minutes a day of invaluable coaching from the world’s best
        </Text>
  
        {/* CTA Button */}
        <Box display="flex" justifyContent="center" mb={6}>
  <Button
    as="a"
    href="https://www.mindvalley.com/membership"
    borderRadius="full"
    size="lg"
    px={8}
    py={6}
    fontWeight="semibold"
    color="white"
    bgGradient="linear(to-b, #9b37f2, #7a12d4)"
    _hover={{
      backgroundColor:"#9b37f2",
    }}
    >
    Become a member
  </Button>
</Box>
  
        {/* People Image + Stats */}
        {isDesktop && (
        <Stack direction="row" spacing={4} justify="center" align="center">
        <AvatarGroup size='md' max={4}>
          <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
          <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
          <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
          <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
          <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
        </AvatarGroup>
            <Box>
              <Text className="text-cool-grey-600 text-sm font-semibold mb-0.5">
                Over 1 million subscribers
              </Text>
              <Text className="text-cool-grey-450 text-sm">since 2020</Text>
            </Box>
          </Stack>
        )}
      </Box>
    );
  };
  
  export default BeginJourneySection;
  