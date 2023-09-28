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
      bg="#e3edf7"
      w="60px"
      h="60px"
      borderRadius="50%"
      boxShadow="6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)"
      border="1px solid rgba(0,0,0,0)"
      cursor="pointer"
      transition="transform 0.5s"
      _hover={{
        boxShadow:
          'inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)',
        border: '1px solid rgba(0,0,0,0.1)',
        transform: 'translateY(0.5em)',
      }}
    >
      <Icon as={FaGithub} w={8} h={8} fill="#0092E4" />
    </Button>
  );
}

export const LinkedinButton = () => {
    return (
      <Button
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#e3edf7"
        w="60px"
        h="60px"
        borderRadius="50%"
        boxShadow="6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)"
        border="1px solid rgba(0,0,0,0)"
        cursor="pointer"
        transition="transform 0.5s"
        _hover={{
          boxShadow:
            'inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)',
          border: '1px solid rgba(0,0,0,0.1)',
          transform: 'translateY(0.5em)',
        }}
      >
        <Icon as={BiLogoLinkedin} w={8} h={8} fill="#0092E4" />
      </Button>
    );
  }

  export const InstaButton = () => {
    return (
      <Button
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#e3edf7"
        w="60px"
        h="60px"
        borderRadius="50%"
        boxShadow="6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7)"
        border="1px solid rgba(0,0,0,0)"
        cursor="pointer"
        transition="transform 0.5s"
        _hover={{
          boxShadow:
            'inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)',
          border: '1px solid rgba(0,0,0,0.1)',
          transform: 'translateY(0.5em)',
        }}
      >
        <Icon as={BiLogoInstagram} w={8} h={8} fill="#0092E4" />
      </Button>
    );
  }



