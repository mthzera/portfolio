import { Box, Center, Text, VStack } from "@chakra-ui/react";

const Skills = () => {
  const skills = ["javascrip", "typescript", "reactjs", "redwoodjs", "prisma"];
  return (
    <Box mt={20} p={8} w="100%" mx="auto">
        <Center>
        <VStack spacing={4} align="center" maxW="600px">
      {skills.map((item) => {
        return <Text fontSize="2xl" fontWeight="bold" color="blue.500">{item}</Text>;
      })}
      </VStack>
      </Center>
    </Box>
  );
};

export default Skills;
