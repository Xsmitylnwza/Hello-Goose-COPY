import { twMerge } from "tailwind-merge";
import { HTMLMotionProps, motion } from "framer-motion";

const WinkEffect: React.FC<HTMLMotionProps<"img">> = ({ className, ...rest }) => {
  const winkVariants = {
    wink: {scale: [1, 1.2, 1], transition: {duration: 0.5, repeat: Infinity}}
  }
  return (
    <motion.img
      src="/images/about/Wink.PNG"
      className={twMerge("absolute", className)}
      variants={winkVariants}
      initial="wink"
      animate="wink"
      {...rest}
    />
  );
};

export default WinkEffect;
