import { HTMLMotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type FlowerProps = {
  colorFlower: string;
  delay: number;
} & HTMLMotionProps<"img">;

const Flower: React.FC<FlowerProps> = ({ className, colorFlower, delay, ...rest }) => {
  const flowerVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay
      },
    },
  }
  return (
    <motion.img
      className={twMerge(`absolute`, className)}
      src={`/images/events/${colorFlower}.PNG`}
      alt={`${colorFlower}`}
      variants={flowerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      {...rest}
    />
  );
};

export default Flower;
