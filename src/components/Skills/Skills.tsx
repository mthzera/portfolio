import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Heading, Center, Image } from "@chakra-ui/react";

const CarouselContainer: React.FC = () => {
  const companies = [
    "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
    "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white",
    "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
    "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white",
    "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",

    "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white",
    "https://img.shields.io/badge/Azure_DevOps-0078D7?style=for-the-badge&logo=azure-devops&logoColor=white",
    'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white',
    "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white",
    "https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white",
  ];
  // const ColoredButton = chakra(Button, {
  //   baseStyle: {
  //     fontSize: '0.875rem',
  //     lineHeight: '1.25rem',
  //     padding: '2px 0.5rem',
  //     cursor: 'pointer',
  //     borderRadius: '0.375rem',
  //     outline: 'none',
  //   },
  //   variants: {
  //     blue: {
  //       backgroundColor: 'rgba(59, 130, 246, 0.10)',
  //       color: 'rgb(59 130 246)',
  //       border: '1px solid rgb(59 130 246)',
  //     },
  //     yellow: {
  //       backgroundColor: 'rgba(234, 179, 8, 0.10)',
  //       color: 'rgb(234 179 8)',
  //       border: '1px solid rgb(234 179 8)',
  //     },
  //     green: {
  //       backgroundColor: 'rgba(34, 197, 94, 0.10)',
  //       color: 'rgb(34 197 94)',
  //       border: '1px solid rgb(34 197 94)',
  //     },
  //     red: {
  //       backgroundColor: 'rgba(239, 68, 68, 0.10)',
  //       color: 'rgb(239 68 68)',
  //       border: '1px solid rgb(239 68 68)',
  //     },
  //   },
  // });
//   <Button className="blue" size="sm">
//   Share Online
// </Button>

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box p={4} boxShadow="md" rounded="lg" mt={20}>
      <Center>
        <Heading mb={4} color="blue.500">
          Skils
        </Heading>
      </Center>
      <Slider {...settings} >
        {companies.map((company, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md" mt={4}>
            <Image src={company} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselContainer;
