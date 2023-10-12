import { useScroll } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import About from "./components/About";
import HeroBanner from "./components/HeroBanner";
import NavBar from "./components/Nav";
import StickyLinks from "./components/Social";
import Team from "./components/Team";
import usePageStore from "./stores/pageStore";

function App() {
  const { setPage } = usePageStore();

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

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
      const aboutOffsetTop = aboutRef.current?.offsetTop;
      const teamOffsetTop = teamRef.current?.offsetTop;
      const currentScroll = window.scrollY + window.innerHeight / 2;

      if (currentScroll >= aboutOffsetTop! && currentScroll < teamOffsetTop!) {
        setPage("/about");
      } else if (currentScroll >= teamOffsetTop!) {
        setPage("/teams");
      } else {
        setPage("/");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setPage]);

  return (
    <div className="flex min-h-screen flex-col items-center overflow-hidden">
      <NavBar isLogoVisible={isLogoVisible} navTo={navTo} />
      <HeroBanner ref={heroRef} />
      <About ref={aboutRef} />
      <Team ref={teamRef} />
      <StickyLinks />
    </div>
  );
}

export default App;
