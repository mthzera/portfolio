import {
  Heading,
  Box,
  Flex,
  Center,
} from "@chakra-ui/react";

import { Avatar } from "@mui/material";


import {
  GithubButton,
  InstaButton,
  LinkedinButton,
} from "../../assets/IconButton/IconButtons";
import user from '../../assets/user.jpg'

export const Header = () => {
  
  return (
    <Box bg="palette.gray.400">
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
            {/* <Image src={esfera} alt="esfera" {...sizeImg} />
            <Image src={esfera} alt="esfera" {...sizeImg} />
            <Image src={esfera} alt="esfera" {...sizeImg} /> */}
            {/* <Avatar sx={{ width: 150, height: 150 }} alt='Dan Abrahmov' src={user} /> */}
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
