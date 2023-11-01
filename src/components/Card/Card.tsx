"use client";

import {
  Flex,
  Text,
  Box,
  Image,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";

import { AiOutlineLink } from "react-icons/ai";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface ProjectsProps {
  image: string;
  name: string;
  description: string;
  acting: string;
  urlAvailable: boolean;
}

function ProductAddToCart({
  image,
  name,
  description,
  acting,
  urlAvailable,
}: ProjectsProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <Flex p={50} gap={20} w="full" alignItems="center" justifyContent="center">
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
                label={
                  urlAvailable !== true
                    ? "link indisponível"
                    : "Link da aplicação"
                }
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}
              >
                <chakra.a href={"#"} display={"flex"}>
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
        <Text fontSize="3xl" color="palette.text_body">
        Descrição
      </Text>
      </Flex>
     
    </motion.div>
  );
}

export default ProductAddToCart;
