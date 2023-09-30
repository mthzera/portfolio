import { Box, Text, VStack } from "@chakra-ui/react";

const PortfolioContainer: React.FC = () => {
  return (
    <Box
      bg="gray.200" // Cor de fundo cinza
      p={8} // Espaçamento interno
      borderRadius="lg" // Borda arredondada
      boxShadow="lg" // Sombra
      maxW="500px" // Largura máxima
      mx="auto" // Centralizado
    >
      <VStack spacing={4} align="center">
        <Text fontSize="2xl" fontWeight="bold" color="blue.500">
          Sobre Mim
        </Text>
        <Text fontSize="lg" color="black">
          Olá! Meu nome é [Seu Nome] e sou um [Sua Profissão]. Tenho trabalhado na área de [Sua Área de Atuação] por [Número de Anos] anos, adquirindo experiência em [Habilidades ou Conquistas Relevantes].
        </Text>
      </VStack>
    </Box>
  );
};

export default PortfolioContainer;
