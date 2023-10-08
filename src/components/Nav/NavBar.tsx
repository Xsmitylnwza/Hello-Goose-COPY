import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import NavItems from "./NavItems";
import { motion } from "framer-motion";

type NavbarProps = {
  isLogoVisible?: boolean;
} & HTMLAttributes<HTMLElement>;

const NavBar = ({ isLogoVisible = false, ...props }: NavbarProps) => {
  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }
  return (
    <nav
      className={twMerge(
        props.className,
        isLogoVisible ? "py-12" : "py-0",
        "fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between px-8 sm:h-12 md:h-16",
        "transition-all duration-300 ease-in-out px-[1rem]",
      )}
      {...props}
    >
      <div className="flex h-full items-center justify-start space-x-[70px]">
        <a href="/">
          {!isLogoVisible && (
            <motion.button
              className="left-10 h-[4.5rem] w-56 origin-top-left rounded-b-3xl bg-white opacity-100 shadow-md hover:-translate-y-1 sm:rounded-b-xl md:left-5 md:h-16 md:w-44 md:rounded-b-2xl 2xl:scale-125"
              style={{
                backgroundImage: "url('/images/sit-kmutt-logo.webp')",
                backgroundSize: "contain",
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
              }}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          )}
          {isLogoVisible && (
            <motion.button
              className="h-20 origin-top-left opacity-100 left-10 w-72 hover:-translate-y-1 sm:h-12 sm:w-44 md:left-5 md:h-16 md:w-56 2xl:scale-125"
              style={{
                backgroundImage: "url('/images/logo.webp')",
                backgroundSize: "60%",
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
              }}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          )}
        </a>
      </div>

      <NavItems />
    </nav>
  );
};

export default NavBar;
