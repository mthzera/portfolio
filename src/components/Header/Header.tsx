import { Heading, Box, Flex, Center, Text } from "@chakra-ui/react";

import {
  GithubButton,
  InstaButton,
  LinkedinButton,
} from "../../assets/IconButton/IconButtons";
import LanguageSwitch from "./components/LanguegeSwitch";
import PortfolioContainer from "../About/About";

export const Header = () => {
  const StyleTitle = {
    fontSize: ["9xl", null],
    color: "palette.title",
    fontWeight: 800,
  };
  return (
    <Box bg="palette.bg">
      <Box bg="palette.gray.100" width={8} h={8}>
        <LanguageSwitch />
      </Box>

      <Box>
        <Center>
          <Text color="palette.text" fontSize='2xl' >Hi 🙋‍♂️ My name is Matheus Alves</Text>
          <Flex alignItems="center" gap={6}>
            <Heading as="h1" {...StyleTitle} textAlign="start" noOfLines={1}>
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
            <Heading as="h1" {...StyleTitle} textAlign="center" noOfLines={1}>
              DEVELOPER
            </Heading>
          </Flex>
        </Center>
        <Center>
          <PortfolioContainer />
        </Center>
      </Box>
    </Box>
  );
};
