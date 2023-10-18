import { Heading, Box, Flex, Center } from "@chakra-ui/react";

import {
  GithubButton,
  InstaButton,
  LinkedinButton,
} from "../../assets/IconButton/IconButtons";
import LanguageSwitch from "./components/LanguegeSwitch";

export const Header = () => {
  return (
    <Box bg="palette.gray.400">
      
        <Box bg="palette.gray.100" width={8} h={8} >
          <LanguageSwitch />
        </Box>
      
      <Box>
        <Center>
          <Flex alignItems="center" gap={6}>
            <Heading as="h1" fontSize="10em" textAlign="start" noOfLines={1}>
              FRONTEND
            </Heading>
            <Flex alignItems="center" ml={6} gap={6}>
              <GithubButton />
              <LinkedinButton />
              <InstaButton />
            </Flex>
          </Flex>
        </Center>
        <Center>
          <Flex alignItems="center" gap={6}>
            <Heading as="h1" fontSize="12em" textAlign="center" noOfLines={1}>
              DEVELOPER
            </Heading>
          </Flex>
        </Center>
      </Box>
    </Box>
  );
};
