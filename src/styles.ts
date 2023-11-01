import { extendTheme } from '@chakra-ui/react'
import designPhoto from "./assets/Images/design.svg"

const colors = {
  primary: '#3C004F',
  second: '#fb6432',
  gray: {
    900: '#282626',
    400: '#A0AEC0',
  },
  bg: "radial-gradient(48.89% 48.89% at 53.51% 48.89%, #012583 0%, #000C29 100%)",
  bg_image: designPhoto,
  title: "rgba(255, 255, 255, 0.80)",
  text: "rgba(255, 255, 255, 0.50)",
  text_body:"rgba(0, 0, 0, 0.50)",
  bg_body: "linear-gradient(179deg, #000C29 0.46%, rgba(169, 194, 255, 0.70) 49.97%, #000C29 99.47%)",
}

export const theme = extendTheme({
  colors: {
    palette: { ...colors },
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Montserrat, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'linear-gradient(179deg, #000C29 22.12%, #89ABFF 31.16%, #A0B3E2 59.76%, #A7B5D9 99.47%)',
      },
    },
  },
})