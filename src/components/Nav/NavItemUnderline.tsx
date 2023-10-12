import { motion } from "framer-motion";

type NavItemUnderlineProps = {
  active?: boolean;
};

const NavItemUnderline = ({ active }: NavItemUnderlineProps) => {
  if (!active) return null;

  return (
    <motion.img
      src="/images/nav/underline.png"
      alt="Underline"
      className="absolute -bottom-2 left-0 w-full translate-y-1/2 transform transition-all duration-500 ease-in-out"
    />
  );
};

export default NavItemUnderline;
