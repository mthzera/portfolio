import React, { useState } from 'react';
import { Box, Icon, Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box position="relative">
      <motion.img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
      {/* Botões das setas agora estão fora do componente ImageCarousel */}
      <Button
        position="absolute"
        left="0"
        mr={4}
        top="50%"
        transform="translateY(-50%)"
        onClick={prevImage}
        zIndex="1"
        opacity={0.5}
      >
        <Icon as={ChevronLeftIcon} boxSize={6} />
      </Button>
      <Button
        position="absolute"
        right="0"
        top="50%"
        transform="translateY(-50%)"
        onClick={nextImage}
        zIndex="1"
        opacity={0.5}
      >
        <Icon as={ChevronRightIcon} boxSize={6} />
      </Button>
    </Box>
  );
};

export default ImageCarousel;
