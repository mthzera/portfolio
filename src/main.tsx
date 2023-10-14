import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider , extendTheme, ColorModeScript} from "@chakra-ui/react";
import App from "./App.tsx";
import { theme } from './styles.ts'

const extendedTheme = extendTheme(theme)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeScript/>
    <ChakraProvider theme={extendedTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
