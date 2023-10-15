import { HTMLMotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type FlowerProps = {
  colorFlower: string;
} & HTMLMotionProps<"img">;

const Flower: React.FC<FlowerProps> = ({ className, colorFlower, ...rest }) => {
  return (
    <motion.img
      className={twMerge(`absolute`, className)}
      src={`/images/events/${colorFlower}.PNG`}
      alt={`${colorFlower}`}
      {...rest}
    />
  );
};

export default Flower;
