import HeroLogo from "./HeroLogo.tsx";

const HeroBanner = () => {
  return (
    <div className="relative min-h-screen bg-bottom bg-no-repeat bg-cover flex-center-col bg-background-Hero">
      <HeroLogo />
      <img className="absolute top-0 w-screen"
      src="/images/hero/Cloud.PNG" alt="cloud" />
      <img className="hidden absolute right-[15%] w-1/6 md:block md:bottom-[2%] lg:bottom-[5%]" 
      src="/images/hero/goose-element_0004_Layer-6.png" alt="goose hero" />
      <img className="absolute bottom-0 w-screen"
      src="/images/hero/Rock.PNG" alt="rock"/>
    </div>
  );
};

export default HeroBanner;
