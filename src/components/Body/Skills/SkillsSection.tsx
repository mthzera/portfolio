import React, { FC } from 'react';
import { Box, Flex, Text, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';

interface SkillsSectionProps {
  skills: string[];
  languages: string[];
}

const SkillsSection: FC<SkillsSectionProps> = ({ skills, languages }) => {
  const bgColor = useColorModeValue('brand.50', 'gray.800');
  const textColor = useColorModeValue('brand.700', 'white');

  return (
    <Box p={4} boxShadow="md" borderRadius="md" bgColor={bgColor} color={textColor}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Habilidades e Linguagens
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={1}>
          <Text fontSize="lg" fontWeight="semibold" mb={2}>
            Habilidades:
          </Text>
          {skills.map((skill, index) => (
            <Text key={index}>{skill}</Text>
          ))}
        </GridItem>
        <GridItem colSpan={1}>
          <Text fontSize="lg" fontWeight="semibold" mb={2}>
            Linguagens:
          </Text>
          {languages.map((language, index) => (
            <Text key={index}>{language}</Text>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SkillsSection;
