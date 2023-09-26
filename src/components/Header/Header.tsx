import { Heading, Box, Image, Flex } from "@chakra-ui/react";
import esfera from "../../assets/esfera.svg";

export const Header = () => {
  const sizeImg = { w: 24, h: 24 };
  return (
    <Box bg="gray.400">
      <Box ml='10%'>
      <Flex alignItems="center" gap={6}>
        <Heading as="h1" fontSize="12em" textAlign="start" noOfLines={1}>
          FRONTEND
        </Heading>
        <Image src={esfera} alt="esfera" {...sizeImg} />
        <Image src={esfera} alt="esfera" {...sizeImg} />
        <Image src={esfera} alt="esfera" {...sizeImg} />
      </Flex>
      <Flex alignItems="center" gap={6}>
        <Image src={esfera} alt="esfera" {...sizeImg} />
        <Image src={esfera} alt="esfera" {...sizeImg} />
        <Image src={esfera} alt="esfera" {...sizeImg} />
        <Heading
          as="h1"
          fontSize="12em"
          mt={"-2rem"}
          textAlign="center"
          noOfLines={1}
        >
          DEVELOPER
        </Heading>
      </Flex>
      </Box>
    </Box>
  );
};
