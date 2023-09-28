import Card from "../../Card/Card";
import { Box, Grid, Text } from "@chakra-ui/react";

export const Projects = () => {
  return (
    <Box bg="#e3edf7">
      <Text fontSize="7xl" fontWeight={600} textAlign="center">
        PROJECTS
      </Text>
      <Grid templateColumns='repeat(4, 1fr)' alignItems='center' w='70%' ml='15%' gap={6}>
        <Card />
        <Text>descrição</Text>
        <Card />
        <Text>descrição</Text>
        <Card />
        <Text>descrição</Text>
        <Card />
        <Text>descrição</Text>
      </Grid>
    </Box>
  );
};
