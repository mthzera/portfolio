import { Box, Center, Text, VStack } from "@chakra-ui/react";

const PortfolioContainer: React.FC = () => {
  return (
    <Box mt={20} p={8} w="100%" mx="auto">
      <Center>
        <VStack spacing={4} align="center" maxW="600px">
          <Text fontSize="2xl" fontWeight="bold" color="blue.500">
            Sobre Mim
          </Text>

          <Text textAlign="justify" fontSize="lg" color="black">
            Meu nome é Matheus Alves, sou um Desenvolvedor Front End com mais de
            3 anos de experiência. Tenho uma paixão pelo café e atualmente
            trabalho como Desenvolvedor Front End Pleno na Stay Holding. Já tive
            o privilégio de contribuir para grandes empresas e estou sempre em
            busca de oportunidades para aprender coisas novas. Convido você a
            explorar meu portfólio e conhecer meus projetos que destacam minha
            habilidade em criar interfaces web envolventes e funcionais.
          </Text>
        </VStack>
      </Center>
    </Box>
  );
};

export default PortfolioContainer;
