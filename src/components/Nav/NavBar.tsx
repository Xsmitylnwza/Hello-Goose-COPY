import NavMenu from "./NavMenu.tsx";

const NavBar = () => {
  return (
    <div className="fixed top-0 w-full">
      <div className="flex px-[4.5rem] py-4 flex-between">
        {/* <img
          src="../public/images/Logo.PNG"
          alt="Logo"
          className="w-[20%] h-full"
        /> */}
        <h1>Logo</h1>
        <NavMenu />
      </div>
    </div>
  );
};

export default NavBar;
