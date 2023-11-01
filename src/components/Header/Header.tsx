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

  const textStyle = {
    color: "palette.text",
    fontSize: "2xl",
    fontWeight: 600,
  };

  return (
    <Box bg={"palette.bg"}>
      <Box bg="palette.gray.100" width={8} h={8}>
        <LanguageSwitch />
      </Box>

      <Box>
        <Center>
          <Flex alignItems="center" gap={6}>
            <Text {...textStyle} textTransform="uppercase">
              Hi 🙋‍♂️ i'm Matheus
            </Text>
            <GithubButton />
            <LinkedinButton />
            <InstaButton />
          </Flex>
        </Center>
        <Flex
          alignItems="center"
          flexDirection="column"
          gap={6}
          justifyContent="center"
        >
          <Flex alignItems="center" justifyContent="center" gap={6}>
            <Heading as="h1" {...StyleTitle} textAlign="center" noOfLines={1}>
              FRONTEND
            </Heading>
          </Flex>
          <Heading as="h1" {...StyleTitle} textAlign="center" noOfLines={1}>
            DEVELOPER
          </Heading>
        </Flex>

        <Center>
          <PortfolioContainer />
        </Center>
      </Box>
    </Box>
  );
};
