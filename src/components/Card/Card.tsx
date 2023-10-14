"use client";

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import {AiOutlineLink} from 'react-icons/ai'






interface ProjectsProps {
  image: string;
  name: string;
  description: string;
  acting: string;
  urlAvailable: boolean;
}

function ProductAddToCart({ image, name, description, acting, urlAvailable }: ProjectsProps) {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box w={"lg"}>
        <Image src={image} alt={`Picture of ${name}`} roundedTop="lg" />

        <Box p="6" borderWidth="1px" rounded="lg" shadow="lg">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {name}
            </Box>
            <Tooltip
              label={urlAvailable !== true ? 'link indisponível': "Link da aplicação"}
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a  href={"#"} display={"flex"}>
                <Icon as={AiOutlineLink} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box as="span" color={"gray.600"} fontSize="lg">
              {acting}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductAddToCart;
