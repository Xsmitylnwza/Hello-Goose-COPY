
const NavMenu = () => {
  const navLinks = ["about", "teams", "events", "faqs", "game"];
  return (
    <div>
      <ul className="flex gap-7">
        {navLinks.map((link) => {
          return <li className="uppercase">{link}</li>;
        })}
      </ul>
    </div>
  );
};

export default NavMenu;
