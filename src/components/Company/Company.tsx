import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Heading, Center } from "@chakra-ui/react";

const CarouselContainer: React.FC = () => {
  const companies = [
    "Empresa 1",
    "Empresa 2",
    "Empresa 3",
    "Empresa 4",
    "Empresa 5",
    "Empresa 6",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <Box p={4} boxShadow="md" rounded="lg" bg="white">
      <Center>
        <Heading mb={4}>Empresas onde já trabalhei</Heading>
      </Center>
      <Slider {...settings}>
        {companies.map((company, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md">
            {company}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselContainer;
