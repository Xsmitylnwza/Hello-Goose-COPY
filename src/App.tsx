import About from "./components/About"
import HeroBanner from "./components/HeroBanner"
import NavBar from "./components/Nav"
import StickyLinks from "./components/Social"

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <NavBar />
      <HeroBanner />
      <About />
      <StickyLinks />
    </div>
  )
}

export default App
