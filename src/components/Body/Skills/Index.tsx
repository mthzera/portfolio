
import { ChakraProvider, CSSReset, extendTheme, Box, Container } from '@chakra-ui/react';
import SkillsSection from './SkillsSection';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#F0F2F5', // Cinza claro
      500: '#333333', // Preto
      700: '#007BFF', // Azul
    },
  },
});

const Skill = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
  const languages = ['JavaScript', 'Python', 'Java'];

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Container maxW="container.md" py={8}>
        <SkillsSection skills={skills} languages={languages} />
      </Container>
    </ChakraProvider>
  );
};

export default Skill;