import Card from "../../Card/Card";
import { Box, Flex, Text } from "@chakra-ui/react";

export const Projects = () => {
  return (
    <Box bg="grey.400">
      <Text fontSize="7xl" fontWeight={600} textAlign="center">
        PROJECTS
      </Text>
      <Flex flexDirection='column' >
        <Card />
        <Card />
        <Card />
        <Card />
      </Flex>
    </Box>
  );
};
