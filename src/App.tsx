import { Header } from "./components/Header/Header";
import { Projects } from "./components/Body/Projects/Projects";
import CarouselContainer from "./components/Company/Company";
import PortfolioContainer from "./components/About/About";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <PortfolioContainer />
      <CarouselContainer />
      <Skills/>
      <Projects />
      
    </>
  );
}

export default App;
