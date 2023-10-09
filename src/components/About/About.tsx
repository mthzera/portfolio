import { Box, Center, Text, VStack } from "@chakra-ui/react";

const PortfolioContainer: React.FC = () => {
  return (
    <Box mt={20} p={8} w="100%" mx="auto">
      <Center>
        <VStack spacing={4} align="center" maxW="600px">
          <Text fontSize="2xl" fontWeight="bold" color="blue.500">
            About
          </Text>

          <Text textAlign="justify" fontSize="lg" color="black">
          My name is Matheus Alves, I am a Front End Developer with more than
            3 years of experience. I have a passion for coffee and currently
            I work as a Full Front End Developer at Stay Holding. I already had
            the privilege of contributing to large companies and I am always in
            looking for opportunities to learn new things. I invite you to
            explore my portfolio and discover my projects that highlight my
            ability to create engaging and functional web interfaces.
          </Text>
        </VStack>
      </Center>
    </Box>
  );
};

export default PortfolioContainer;
