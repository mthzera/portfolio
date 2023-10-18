import Card from "../../Card/Card";
import { Box, Grid, Text } from "@chakra-ui/react";
import Sbuild from "../../../assets/Images/Sbuild.svg";
import Stayou from "../../../assets/Images/Stayou.svg";
import ID_Integrante from "../../../assets/Images/ID-Integrante.svg";

import Nivel3_SFM from "../../../assets/Images/Nivel3-SFM.svg";
import Nivel4_SFM from "../../../assets/Images/Nivel4-SFM.svg";
import { motion } from "framer-motion";
import { StrictMode } from "react";

const projects = [
  {
    image: Nivel3_SFM,
    name: "Factory floor management",
    description: "descrição",
    acting: "Front End Developer",
    urlAvailable: false,
  },
  {
    image: ID_Integrante,
    name: "Member scoring and ranking program",
    description: "descrição",
    acting: "Front End Developer",
    urlAvailable: false,
  },
  {
    image: Sbuild,
    name: "Website Sbuild",
    description: "descrição",
    acting: "Front End Developer",
    urlAvailable: true,
  },

  {
    image: Stayou,
    name: "Website Stayou",
    description: "descrição",
    acting: "Full Stack Developer",
    urlAvailable: false,
  },
];

export const Projects = () => {
  return (
    <Box mt={20}>
      <Text fontSize="7xl" fontWeight={600} textAlign="center" color="blue.500">
        PROJECTS
      </Text>
      <Grid
        templateColumns="repeat(2, 1fr)"
        alignItems="center"
        w="70%"
        ml="15%"
        gap={6}
      >
        
          {projects.map((item) => {
            return (
              <>
              <StrictMode>
                <motion.div
                  className="box"
                  initial={{ opacity: 0, scale: 0.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <Card
                    image={item.image}
                    name={item.name}
                    description={item.description}
                    acting={item.acting}
                    urlAvailable={item.urlAvailable}
                  />
                </motion.div>
                </StrictMode>
              </>
            );
          })}
       
      </Grid>
    </Box>
  );
};
