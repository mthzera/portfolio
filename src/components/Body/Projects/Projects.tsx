import Card from "../../Card/Card";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";

export const Projects = () => {
  return (
    <Box bg="grey.400">
      <Text fontSize="7xl" fontWeight={600} textAlign="center">
        PROJECTS
      </Text>
      <Grid templateColumns='repeat(2, 1fr)' w='70%' ml='15%' gap={6}>
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </Box>
  );
};
