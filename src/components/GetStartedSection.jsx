import { Box, Text, Button } from "@chakra-ui/react";

const GetStartedSection = () => {
  return (
    <Box
      className="min-h-fit py-12 lg:py-20"
      sx={{
        background: "linear-gradient(180deg, #feeded, #e8f9f1)",
      }}
    >
      <Box
        className="max-w-4xl mx-auto text-center px-4"
      >
        <Text
          fontSize={{ base: "3xl", md: "7xl" }}
          fontWeight="semibold"
          color="gray.900"
        >
          Get started today
        </Text>

        <Text
          fontSize={{ base: "lg", md: "2xl" }}
          fontWeight="bold"
          color="gray.600"
          mt={1}
          mb={6}
        >
          Starting from $16.58/month (billed annually)
        </Text>

        <Button
          as="a"
          href="https://www.mindvalley.com/membership?itm_source=mv.com&itm_campaign=qaap_evergreen&otag=mv.com_qaap_hp"
          target="_self"
          rel="noreferrer"
          px={8}
          py={6}
          fontSize="md"
          backgroundColor="#7928CA"
          fontWeight="semibold"
          color="white"
          borderRadius="full"
          _hover={{ opacity: 0.9 }}
        >
          Become a member
        </Button>
      </Box>
    </Box>
  );
};

export default GetStartedSection;
