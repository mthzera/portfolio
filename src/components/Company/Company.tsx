import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Heading, Center, Image } from "@chakra-ui/react";
import logoAmbev from '../../assets/Images/ambev-logo.svg'
import logoBridedgstone from '../../assets/Images/bridgestone-logo.svg'
import logoReckitt from '../../assets/Images/Reckitt-logo.svg'
import logoSbuild from '../../assets/Images/sbuild-logo.svg'
import logoSttayou from '../../assets/Images/stayou-logo.svg'

const CarouselContainer: React.FC = () => {
  const companies = [
    <Image src={logoAmbev} alt="logoAmbev" />,
    <Image src={logoBridedgstone} alt="logoBridedgstone" />,
    <Image src={logoReckitt} alt="logoReckitt" />,
    <Image src={logoSbuild} alt="logoSbuild" />,
    <Image src={logoSttayou} alt="logoSttayou" />,
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <Box p={4} boxShadow="md" rounded="lg" mt={20}>
      <Center>
        <Heading mb={4} color='blue.500'>Companies</Heading>
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
