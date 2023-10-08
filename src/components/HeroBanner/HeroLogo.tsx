import { MotionValue, motion } from 'framer-motion';

type HeroLogoProps = {
  translateY: MotionValue<number>;
};

const HeroLogo = ({translateY}: HeroLogoProps) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 100, scale: 0 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: 'backInOut' } },
  }
  return <motion.img src="/images/logo.webp" alt="Logo" className="h-full md:w-[45%] w-[65%] z-10" variants={fadeIn} initial="hidden" animate="visible" style={{y: translateY}}/>;
};

export default HeroLogo;
