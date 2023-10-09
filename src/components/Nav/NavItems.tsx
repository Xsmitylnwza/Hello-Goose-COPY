import { useCallback, useState } from "react";
import { NavLinks } from "../../types";
import { isActive } from "../../utils/active";

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
            <a href={navLink.path}>{navLink.name}</a>
            {isActive(navLink.path, currentPath) && (
              <img
                src="/images/nav/underline.png"
                alt="Underline"
                className="absolute -bottom-2 left-0 w-full translate-y-1/2 transform"
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

      {toggle && (
        <div className="fixed left-0 top-0 z-50 flex w-full flex-col items-center justify-center rounded-b-xl bg-white bg-opacity-50 py-10 drop-shadow-2xl filter backdrop-blur-sm transition-all duration-500 ease-in-out lg:hidden">
          <button
            className="text-3xl absolute right-5 top-5 font-cherry text-paragraph-header text-black"
            onClick={toggleNav}
          >
            X
          </button>
          <ul className="flex flex-col items-center justify-center space-y-8">
            {navLinks.map((navLink) => (
              <li
                key={navLink.name}
                className="relative font-cherry text-paragraph-header uppercase text-black"
              >
                <a href={navLink.path}>{navLink.name}</a>
                {isActive(navLink.path, currentPath) && (
                  <img
                    src="/images/nav/underline.png"
                    alt="Underline"
                    className="absolute -bottom-2 left-0 w-full translate-y-1/2 transform"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavItems;
