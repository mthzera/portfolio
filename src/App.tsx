import { Header } from "./components/Header/Header";
import { Projects } from "./components/Body/Projects/Projects";
import Skills from "./components/Body/Skills/Index";
import CarouselContainer from "./components/Company/Company";
import PortfolioContainer from "./components/About/About";

function App() {
  return (
    <>
      <Header />
      <PortfolioContainer/>
      <Skills />
      <CarouselContainer/>
      <Projects />
    </>
  );
}

export default App;
