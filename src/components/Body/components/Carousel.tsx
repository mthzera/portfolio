// import React, { useState } from 'react';
// import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
// import styled from 'styled-components';

// const colorPurple = '#8B5CF6';
// const colorPink = '#EC4899';
// const colorGray = '#9CA3AF';
// const colorBlack = '#1F2937';
// const cardSize = '23rem';

// const CarouselWrapper = styled.div`
//   position: relative;
//   width: ${cardSize};
//   height: ${cardSize};
//   perspective: 500px;
//   transform-style: preserve-3d;
// `;

// const CardContainer = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   transform: 
//     rotateY(calc(var(--offset) * 50deg)) 
//     scaleY(calc(1 + var(--abs-offset) * -0.4))
//     translateZ(calc(var(--abs-offset) * -30rem))
//     translateX(calc(var(--direction) * -5rem));
//   filter: blur(calc(var(--abs-offset) * 1rem));
//   transition: all 0.3s ease-out;
// `;

// const Card = styled.div`
//   width: 100%;
//   height: 100%;
//   padding: 2rem;
//   background-color: hsl(280deg, 40%, calc(100% - var(--abs-offset) * 50%));
//   border-radius: 1rem;
//   color: ${colorGray};
//   text-align: justify;
//   transition: all 0.3s ease-out;

//   h2 {
//     text-align: center;
//     font-size: 2rem;
//     font-weight: bold;
//     margin: 0 0 0.7em;
//     color: ${colorBlack};
//   }

//   p, h2 {
//     transition: all 0.3s ease-out;
//     opacity: var(--active);
//   }
// };`

// const Nav = styled.button`
//   color: white;
//   font-size: 5rem;
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   top: 50%;
//   z-index: 2;
//   cursor: pointer;
//   user-select: none;
//   background: unset;
//   border: unset;

//   &.left {
//     transform: translateX(-100%) translateY(-50%);
//   }

//   &.right {
//     right: 0;
//     transform: translateX(100%) translateY(-50%);
//   }
// `;

// interface CarouselProps {
//   images: string[];
// }

// const Carousel: React.FC<CarouselProps> = ({ images }) => {
//   const [active, setActive] = useState(0);
//   const count = images.length;
//   const MAX_VISIBILITY = 3;

//   return (
//     <CarouselWrapper>
//       {active > 0 && (
//         <Nav className="left" onClick={() => setActive(active - 1)}>
//           <TiChevronLeftOutline />
//         </Nav>
//       )}
//       {images.map((image, i) => (
//         <CardContainer
//           key={i}
//           style={{
//             '--active': i === active ? 1 : 0,
//             '--offset': (active - i) / 3,
//             '--direction': Math.sign(active - i),
//             '--abs-offset': Math.abs(active - i) / 3,
//             pointerEvents: active === i ? 'auto' : 'none',
//             opacity: Math.abs(active - i) >= MAX_VISIBILITY ? 0 : 1,
//             display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
//           }}
//         >
//           <Card>
//             <img src={image} alt={`Image ${i}`} />
//           </Card>
//         </CardContainer>
//       ))}
//       {active < count - 1 && (
//         <Nav className="right" onClick={() => setActive(active + 1)}>
//           <TiChevronRightOutline />
//         </Nav>
//       )}
//     </CarouselWrapper>
//   );
// };

// export default Carousel;
