import { motion } from "framer-motion";

const GameButton = () => {
  const gameButton = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    hover: {
      scale: 1.1,
    },
    tap: {
      rotate: 2,
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
        duration: 0.1,
      },
    },
  };

  return (
    <a
      href=""
      className="z-10 h-full w-[70%] cursor-pointer md:w-[50%] lg:w-[45%]"
    >
      <motion.img
        className="hover:drop-shadow-[0_0_50px_#fff]"
        src="/images/game/เกม.png"
        alt="Game Link"
        variants={gameButton}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        transition={{ duration: 0.2 }}
      />
    </a>
  );
};

export default GameButton;
