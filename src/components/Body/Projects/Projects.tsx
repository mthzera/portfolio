import Card from "../../Card/Card";
import { Box, Grid, Text } from "@chakra-ui/react";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "SFM - NIvel 1",
    description: "descrição" 
  },

  {
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "SFM - NIvel 1",
    description: "descrição" 
  },
  {
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "SFM - NIvel 1",
    description: "descrição" 
  },
  {
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "SFM - NIvel 1",
    description: "descrição" 
  },
];

export const Projects = () => {
  return (
    <Box mt={20}>
      <Text fontSize="7xl" fontWeight={600} textAlign="center" color='blue.500'>
        PROJECTS
      </Text>
      <Grid templateColumns='repeat(4, 1fr)' alignItems='center' w='70%' ml='15%' gap={6}>
      {projects.map((item) => {
        return (
          <>
        <Card image={item.image} name={item.name} description={item.description}  />
        <Text>{item.description}</Text>
        </>
        );
      })}
      
      </Grid>
    </Box>
  );
};
