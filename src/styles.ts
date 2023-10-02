import { extendTheme } from '@chakra-ui/react'

const colors = {
  primary: '#3C004F',
  second: '#fb6432',
  gray: {
    900: '#282626',
    400: '#A0AEC0',
  },
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
        bg: '#e3edf7',
      },
    },
  },
})