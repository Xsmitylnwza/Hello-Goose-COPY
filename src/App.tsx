import { useScroll } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import About from "./components/About";
import HeroBanner from "./components/HeroBanner";
import NavBar from "./components/Nav";
import StickyLinks from "./components/Social";
import Team from "./components/Team";
import usePageStore from "./stores/pageStore";
import Events from "./components/Events";
import Faqs from "./components/Faqs";
import Game from "./components/Game";

function App() {
  const { setPage } = usePageStore();

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const navTo = useCallback(
    (path: string) => {
      setPage(path);

      let offsetTop: number | undefined = 0;
      switch (path) {
        case "/":
          offsetTop = heroRef.current?.offsetTop;
          break;
        case "/about":
          offsetTop = aboutRef.current?.offsetTop;
          break;
        case "/teams":
          offsetTop = teamRef.current?.offsetTop;
          break;
        case "/events":
          offsetTop = eventRef.current?.offsetTop;
          break;
        case "/faqs":
          offsetTop = faqRef.current?.offsetTop;
          break;
        case "/game":
          offsetTop = gameRef.current?.offsetTop;
          break;
        default:
          break;
      }

      window.scrollTo({ top: offsetTop!, behavior: "smooth" });
    },
    [setPage],
  );

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const [isLogoVisible, setIsLogoVisible] = useState(false);

  // Initial scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest >= 1) {
        setIsLogoVisible(true);
      } else {
        setIsLogoVisible(false);
      }
    });
  }, [scrollYProgress]);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = [
        { page: "/", ref: heroRef },
        { page: "/about", ref: aboutRef },
        { page: "/teams", ref: teamRef },
        { page: "/events", ref: eventRef },
        { page: "/faqs", ref: faqRef },
        { page: "/game", ref: gameRef },
      ];
      const currentScroll = window.scrollY + window.innerHeight / 2;

      for (let i = offsets.length - 1; i >= 0; i--) {
        const offsetTop = offsets[i].ref.current?.offsetTop || 0;
        if (currentScroll >= offsetTop) {
          setPage(offsets[i].page);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setPage]);

  return (
    <div className="flex flex-col items-center min-h-screen overflow-hidden">
      <NavBar isLogoVisible={isLogoVisible} navTo={navTo} />
      <HeroBanner ref={heroRef} />
      <About ref={aboutRef} />
      <Team ref={teamRef} />
      <Events ref={eventRef} />
      <Faqs ref={faqRef} />
      <Game ref={gameRef} />
      <StickyLinks />
    </div>
  );
}

export default App;
