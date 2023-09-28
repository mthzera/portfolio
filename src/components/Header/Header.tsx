import {
  Heading,
  Box,
  Image,
  Flex,
  Center,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import esfera from "../../assets/esfera.svg";

import {
  GithubButton,
  InstaButton,
  LinkedinButton,
} from "../../assets/IconButton/IconButtons";

export const Header = () => {
  const sizeImg = { w: 24, h: 24 };
  return (
    <Box bg="gray.400">
      <Box>
        <Center>
          <Flex alignItems="center" gap={6}>
            <Heading as="h1" fontSize="12em" textAlign="start" noOfLines={1}>
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
            <Image src={esfera} alt="esfera" {...sizeImg} />
            <Image src={esfera} alt="esfera" {...sizeImg} />
            <Image src={esfera} alt="esfera" {...sizeImg} />
            <Heading
              as="h1"
              fontSize="12em"
              textAlign="center"
              noOfLines={1}
            >
              DEVELOPER
            </Heading>
          </Flex>
        </Center>
      </Box>
    </Box>
  );
};
