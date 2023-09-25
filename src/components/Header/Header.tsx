import { Heading, Box } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box bg='gray.600'>
      <Heading as="h1" fontSize="12em" noOfLines={1}>
        FRONTEND
      </Heading>
      <Heading as="h1" fontSize="12em" noOfLines={1}>
        DEVELOPER
      </Heading>
    </Box>
  );
};
