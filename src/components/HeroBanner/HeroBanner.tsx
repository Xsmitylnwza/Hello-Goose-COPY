import { motion, useScroll, useTransform } from "framer-motion";
import { HTMLAttributes, forwardRef, useRef } from "react";
import HeroLogo from "./HeroLogo.tsx";

type HeroBannerProps = HTMLAttributes<HTMLDivElement>;

const HeroBanner = forwardRef<HTMLDivElement, HeroBannerProps>(
  ({ className, ...props }, ref) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end start"],
    });
    const transfromY = useTransform(scrollYProgress, [0, 1], [0, -200]);
    return (
      <div ref={ref} className={className} {...props}>
        <div
          ref={containerRef}
          className="flex-center-col relative min-h-screen bg-background-Hero bg-cover bg-bottom bg-no-repeat"
        >
          <HeroLogo translateY={transfromY} />
          <img
            className="absolute top-0 w-screen"
            src="/images/hero/Cloud.PNG"
            alt="cloud"
          />
          <motion.img
            className="absolute right-[15%] hidden w-1/6 md:bottom-[2%] md:block lg:bottom-[5%]"
            src="/images/hero/goose-element_0004_Layer-6.png"
            alt="goose hero"
            style={{ y: transfromY, x: transfromY }}
          />
          <img
            className="absolute bottom-0 w-screen"
            src="/images/hero/Rock.PNG"
            alt="rock"
          />
        </div>
      </div>
    );
  },
);

export default HeroBanner;
