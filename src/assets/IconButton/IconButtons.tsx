import { Button, Icon } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import {BiLogoLinkedin} from 'react-icons/bi'
import {BiLogoInstagram} from 'react-icons/bi'

export const GithubButton = () => {
  return (
    <Button
    display="flex"
    alignItems="center"
    justifyContent="center"
    bg="rgba(227, 237, 247, 0.100)" /* Defina um fundo com transparência */
    w="60px"
    h="60px"
    borderRadius="50%"
    boxShadow="0px 8px 16px rgba(0, 0, 0, 0.2), 0px 0px 4px rgba(0, 0, 0, 0.1)"
    border="1px solid rgba(255, 255, 255, 0.5)" /* Cor da borda mais clara */
    cursor="pointer"
    transition="transform 0.5s, box-shadow 0.5s" /* Adicionar transição à sombra */
    _hover={{
      boxShadow:
        '0px 4px 8px rgba(0, 0, 0, 0.2), 0px 0px 2px rgba(0, 0, 0, 0.1), 0px 12px 10px -10px rgba(0, 0, 0, 0.05)',
      transform: 'translateY(0.5em)',
    }}
  >
      <Icon as={FaGithub} w={8} h={8} fill="blue.500" />
    </Button>
  );
}

export const LinkedinButton = () => {
    return (
      <Button
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="rgba(227, 237, 247, 0.100)" /* Defina um fundo com transparência */
      w="60px"
      h="60px"
      borderRadius="50%"
      boxShadow="0px 8px 16px rgba(0, 0, 0, 0.2), 0px 0px 4px rgba(0, 0, 0, 0.1)"
      border="1px solid rgba(255, 255, 255, 0.5)" /* Cor da borda mais clara */
      cursor="pointer"
      transition="transform 0.5s, box-shadow 0.5s" /* Adicionar transição à sombra */
      _hover={{
        boxShadow:
          '0px 4px 8px rgba(0, 0, 0, 0.2), 0px 0px 2px rgba(0, 0, 0, 0.1), 0px 12px 10px -10px rgba(0, 0, 0, 0.05)',
        transform: 'translateY(0.5em)',
      }}
      >
        <Icon as={BiLogoLinkedin} w={8} h={8} fill="blue.500" />
      </Button>
    );
  }

  export const InstaButton = () => {
    return (
      <Button
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="rgba(227, 237, 247, 0.100)" /* Defina um fundo com transparência */
      w="60px"
      h="60px"
      borderRadius="50%"
      boxShadow="0px 8px 16px rgba(0, 0, 0, 0.2), 0px 0px 4px rgba(0, 0, 0, 0.1)"
      border="1px solid rgba(255, 255, 255, 0.5)" /* Cor da borda mais clara */
      cursor="pointer"
      transition="transform 0.5s, box-shadow 0.5s" /* Adicionar transição à sombra */
      _hover={{
        boxShadow:
          '0px 4px 8px rgba(0, 0, 0, 0.2), 0px 0px 2px rgba(0, 0, 0, 0.1), 0px 12px 10px -10px rgba(0, 0, 0, 0.05)',
        transform: 'translateY(0.5em)',
      }}
      >
        <Icon as={BiLogoInstagram} w={8} h={8} fill="blue.500" />
      </Button>
    );
  }



