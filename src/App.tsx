import HeroLogo from "./components/HeroLogo"
import NavBar from "./components/NavBar"
import StickyLinks from "./components/StickyLinks"

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <NavBar />
      <HeroLogo />
      <StickyLinks />
    </div>
  )
}

export default App
