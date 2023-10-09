import { useCallback, useState } from "react";
import { NavLinks } from "../../types";
import { isActive } from "../../utils/active";
import { AnimatePresence, motion } from 'framer-motion';

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

const NavItems = () => {
  const currentPath = window.location.pathname;
  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

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
            className="relative text-white uppercase font-cherry text-paragraph-header"
          >
            <a href={navLink.path}>{navLink.name}</a>
            {isActive(navLink.path, currentPath) && (
              <img
                src="/images/nav/underline.png"
                alt="Underline"
                className="absolute left-0 w-full transform translate-y-1/2 -bottom-2"
              />
            )}
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
          <motion.div className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full py-10 transition-all duration-500 ease-in-out bg-white bg-opacity-50 rounded-b-xl drop-shadow-2xl filter backdrop-blur-sm lg:hidden" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } }}
            exit={{ opacity: 0, y: -400, transition: { duration: 0.5, ease: "easeInOut" } }}
          >
            <button
              className="absolute text-3xl text-black right-5 top-5 font-cherry text-paragraph-header"
              onClick={toggleNav}
            >
              X
            </button>
            <motion.ul className="flex flex-col items-center justify-center space-y-8" variants={fadeIn} initial="hidden" animate="visible">
              {navLinks.map((navLink, index) => (
                <motion.li
                  key={navLink.name}
                  className="relative text-black uppercase font-cherry text-paragraph-header"
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1, ease: "backOut" }}
                >
                  <a href={navLink.path}>{navLink.name}</a>
                  {isActive(navLink.path, currentPath) && (
                    <img
                      src="/images/nav/underline.png"
                      alt="Underline"
                      className="absolute left-0 w-full transform translate-y-1/2 -bottom-2"
                    />
                  )}
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
