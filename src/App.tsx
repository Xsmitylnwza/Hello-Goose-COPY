import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import About from "./components/About";
import HeroBanner from "./components/HeroBanner";
import NavBar from "./components/Nav";
import StickyLinks from "./components/Social";

function App() {
  const { scrollYProgress } = useScroll();

  const [isLogoVisible, setIsLogoVisible] = useState(false);

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest > 0.5) {
        setIsLogoVisible(true);
      } else {
        setIsLogoVisible(false);
      }
    });
  }, [scrollYProgress]);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <NavBar isLogoVisible={isLogoVisible} />
      <HeroBanner />
      <About />
      <StickyLinks />
    </div>
  );
}

export default App;
