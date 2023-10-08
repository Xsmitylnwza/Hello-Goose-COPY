import NavMenu from "./NavMenu"


const NavBar = () => {
  return (
    <div className="w-full px-8 flex-between">
        <img src="../public/images/Logo.PNG" alt="Logo" className="w-[20%] h-full" />
        <NavMenu />
    </div>
  )
}

export default NavBar