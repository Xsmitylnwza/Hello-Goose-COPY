import { useRef } from "react";
import HeroLogo from "./HeroLogo.tsx";
import { useScroll, motion, useTransform } from "framer-motion";

const HeroBanner = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const gooseY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const gooseX = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return (
    <div ref={containerRef} className="relative min-h-screen bg-bottom bg-no-repeat bg-cover flex-center-col bg-background-Hero">
      <HeroLogo translateY={textY}/>
      <img className="absolute top-0 w-screen"
      src="/images/hero/Cloud.PNG" alt="cloud" />
      <motion.img className="hidden absolute right-[15%] w-1/6 md:block md:bottom-[2%] lg:bottom-[5%]" 
      src="/images/hero/goose-element_0004_Layer-6.png" alt="goose hero" style={{y: gooseY, x: gooseX}}/>
      <img className="absolute bottom-0 w-screen"
      src="/images/hero/Rock.PNG" alt="rock"/>
    </div>
  );
};

export default HeroBanner;
