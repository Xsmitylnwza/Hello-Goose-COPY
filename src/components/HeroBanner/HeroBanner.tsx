import HeroLogo from "./HeroLogo.tsx";

const HeroBanner = () => {
  return (
    <div className="flex-center-col min-h-screen bg-background-Hero bg-no-repeat bg-cover bg-bottom relative">
      <HeroLogo />
      <img className="absolute bottom-[5rem] right-[25rem] w-1/6" 
      src="/images/hero/goose-element_0004_Layer-6.png" alt="goose hero" />
      <img src="/images/hero/Rock.PNG" alt="rock" 
      className="absolute w-screen bottom-0"/>
    </div>
  );
};

export default HeroBanner;
