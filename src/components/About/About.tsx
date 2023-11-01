import { Text, Flex } from "@chakra-ui/react";

const paragraphStyle = {
  fontSize: "lg",
  color: "palette.text",
  textIndent: "2em", // Recua a primeira linha
  paddingLeft: 0, // Remove a margem esquerda padrão
};

const PortfolioContainer: React.FC = () => {
  return (
    <Flex gap={8} maxW="600px" mt={4}>
      <Text {...paragraphStyle}>
        I am a Front End Developer with more than 3
        years of experience. I have a passion for coffee and currently I work as
        a Front End Developer at Stay Holding. I already had the privilege of
        contributing to large companies and I am always in looking for
        opportunities to learn new things. I invite you to explore my portfolio
        and discover my projects that highlight my ability to create engaging
        and functional web interfaces.
      </Text>
    </Flex>
  );
};

export default PortfolioContainer;
