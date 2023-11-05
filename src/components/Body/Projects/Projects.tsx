import Card from "../../Card/Card";
import { Box, Grid, Image, Text } from "@chakra-ui/react";
import Sbuild from "../../../assets/Images/Sbuild.svg";
import Stayou from "../../../assets/Images/Stayou.svg";
import ID_Integrante from "../../../assets/Images/ID-Integrante.svg";

import Nivel3_SFM from "../../../assets/Images/Nivel3-SFM.svg";
import Nivel4_SFM from "../../../assets/Images/Nivel4-SFM.svg";
import MorePictures from "../components/MorePictures";
import Carousel from "../components/Carousel";
import { v4 as uuidv4 } from "uuid";


const projects = [
  {
    images: [Nivel3_SFM, Nivel4_SFM],
    name: "Factory floor management",
    description:
      "Sistema de gerenciamento de chao de fabrica, visa monitorar, adicionar pendencias e prioridades em cada area fabril e gerencial.Nivel 3 utilizado por supervisores podemos visualizar, monitorar as principais atividades dos demais niveis. A aplicacao foi desenvolvida para facilitar as atividades do dia a dia, gerenciamento. Ganhos com a digitalizacao e diminuicao de papel. Sistema centralizado gerando historicos das atividades em geral,",
    acting: "Front End Developer",
    urlAvailable: false,
  },
  {
    images: [ID_Integrante],
    name: "Member scoring and ranking program",
    description: "descrição",
    acting: "Front End Developer",
    urlAvailable: false,
  },
  {
    images: [Sbuild],
    name: "Website Sbuild",
    description: "descrição",
    acting: "Front End Developer",
    urlAvailable: true,
  },

  {
    images: [Stayou],
    name: "Website Stayou",
    description: "descrição",
    acting: "Full Stack Developer",
    urlAvailable: false,
  },
];

export const Projects = () => {
  // const projectImages = [
  //   Nivel3_SFM,
  //   ID_Integrante,
  //   Nivel3_SFM,
  //   ID_Integrante,
  //   Nivel3_SFM,
  //   ID_Integrante,
  //   // Adicione mais URLs de imagens conforme necessário.
  // ];

 
  return (
    <Box mt={20}>
      <Text
        fontSize="7xl"
        fontWeight={600}
        textAlign="center"
        color="palette.title"
      >
        PROJECTS
      </Text>
      <Grid
        templateColumns="repeat(1, 1fr)"
        alignItems="center"
        w="70%"
        ml="15%"
        gap={6}
      >
        {/* <Carousel images={projectImages} /> */}
        {projects.map((item) => {
          return (
            <Card
              images={item.images}
              name={item.name}
              description={item.description}
              acting={item.acting}
              urlAvailable={item.urlAvailable}
            />
          );
        })}
      </Grid>
    </Box>
  );
};
