import { Header } from "./components/Header/Header";
import { Projects } from "./components/Body/Projects/Projects";
import CarouselContainer from "./components/Skills/Skills";
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

type EnvironmentContextType = {
  language: boolean;
  setLanguage: (value: boolean) => void;
};
export const EnvironmentDataContext = React.createContext<
  EnvironmentContextType | undefined
>(undefined);

function App() {
  const [language, setLanguage] = useState<boolean>(true);
  return (
    <EnvironmentDataContext.Provider value={{ setLanguage, language }}>
      <Header />
     
      
        {/* <CarouselContainer /> */}
        <Projects />
      
    </EnvironmentDataContext.Provider>
  );
}

export default App;
