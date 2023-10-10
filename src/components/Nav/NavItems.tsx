import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import usePageStore from "../../stores/pageStore";
import { NavLinks } from "../../types";
import { isActive } from "../../utils/active";
import NavItemUnderline from "./NavItemUnderline";

type NavItemsProps = {
  navTo: (path: string) => void;
};

const navLinks: NavLinks[] = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Teams",
    path: "/teams",
  },
  {
    name: "Events",
    path: "/events",
  },
  {
    name: "FAQs",
    path: "/faqs",
  },
  {
    name: "Game",
    path: "/game",
  },
];

const NavItems = ({ navTo }: NavItemsProps) => {
  const { page } = usePageStore();

  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const [toggle, setToggle] = useState(false);

  const toggleNav = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return (
    <>
      <ul className="hidden h-full items-center justify-end space-x-[70px] lg:flex">
        {navLinks.map((navLink) => (
          <li
            key={navLink.name}
            className="relative font-cherry text-paragraph-header uppercase text-white"
          >
            <div className="cursor-pointer" onClick={() => navTo(navLink.path)}>
              {navLink.name}
            </div>
            <NavItemUnderline active={isActive(navLink.path, page)} />
          </li>
        ))}
      </ul>

      <div className="flex h-full items-center justify-end space-x-[70px] lg:hidden">
        <button
          className="relative font-cherry text-[48px] uppercase text-black"
          onClick={toggleNav}
        >
          =
        </button>
      </div>
      <AnimatePresence>
        {toggle && (
          <motion.div
            className="fixed left-0 top-0 z-50 flex w-full flex-col items-center justify-center rounded-b-xl bg-white bg-opacity-50 py-10 drop-shadow-2xl filter backdrop-blur-sm transition-all duration-500 ease-in-out lg:hidden"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              y: -400,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <button
              className="text-3xl absolute right-5 top-5 font-cherry text-paragraph-header text-black"
              onClick={toggleNav}
            >
              X
            </button>
            <motion.ul
              className="flex flex-col items-center justify-center space-y-8"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((navLink, index) => (
                <motion.li
                  key={navLink.name}
                  className="relative font-cherry text-paragraph-header uppercase text-black"
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1, ease: "backOut" }}
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      navTo(navLink.path);
                      toggleNav();
                    }}
                  >
                    {navLink.name}
                  </div>
                  <NavItemUnderline active={isActive(navLink.path, page)} />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavItems;
