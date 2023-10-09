import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import About from "./components/About";
import HeroBanner from "./components/HeroBanner";
import NavBar from "./components/Nav";
import StickyLinks from "./components/Social";

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const [isLogoVisible, setIsLogoVisible] = useState(false);

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest >= 1) {
        setIsLogoVisible(true);
      } else {
        setIsLogoVisible(false);
      }
    });

    const scrollPosition = window.scrollY;
    if (heroRef.current) {
      const heroPosition = heroRef.current.getBoundingClientRect().top;
      if (scrollPosition > heroPosition) {
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        setIsLogoVisible(true);
      }
    }
  }, [scrollYProgress]);

  return (
    <div className="flex min-h-screen flex-col items-center overflow-hidden">
      <NavBar isLogoVisible={isLogoVisible} />
      <HeroBanner ref={heroRef} />
      <About ref={aboutRef} />
      <StickyLinks />
    </div>
  );
}

export default App;
