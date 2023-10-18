import React, { useState } from "react";
import { Button, Box, Text, Image, Flex } from "@chakra-ui/react";
import { FiGlobe } from "react-icons/fi";
import { EnvironmentDataContext } from "../../../App";
import FlagBR from "../../../assets/Flag_of_Brazil.svg";
import FlagUSA from "../../../assets/Flag_of_the_United_States.svg";

const LanguageToggle = () => {
  const environmentDataContext = React.useContext(EnvironmentDataContext);

  const toggleLanguage = () => {
    environmentDataContext?.setLanguage(!environmentDataContext?.language);
  };

  return (
    <Box textAlign="center">
      <Button
        onClick={toggleLanguage}
        size="lg"
        colorScheme="blue"
        variant="ghost"
        _hover={{ transform: "scale(1.1)" }}
      >
        <Text ml={2}>
          {environmentDataContext?.language ? (
            <Flex align="center">
              Português 
              <Image ml={2} src={FlagBR} alt="PT-BR" w={12} />
            </Flex>
          ) : (
            <Flex align="center">
              English 
              <Image ml={2} src={FlagUSA} alt="EN-US" w={12} />
            </Flex>
          )}
        </Text>
      </Button>
    </Box>
  );
};

export default LanguageToggle;
