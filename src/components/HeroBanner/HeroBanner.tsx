import HeroLogo from "./HeroLogo.tsx";

const HeroBanner = () => {
  return (
    <div className="relative min-h-screen bg-bottom bg-no-repeat bg-cover flex-center-col bg-background-Hero">
      <HeroLogo />
      <img className="absolute bottom-[5rem] right-[25rem] w-1/6" 
      src="/images/hero/goose-element_0004_Layer-6.png" alt="goose hero" />
      <img src="/images/hero/Rock.PNG" alt="rock" 
      className="absolute bottom-0 w-screen"/>
    </div>
  );
};

export default HeroBanner;
