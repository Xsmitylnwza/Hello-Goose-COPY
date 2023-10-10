import WinkEffect from "./WinkEffect";
const GooseImg = function () {
  return (
    <div className=" absolute -bottom-2 z-10  flex w-2/5 items-center justify-center md:static  md:bottom-0 md:justify-start">
      <div className=" relative -bottom-12 min-w-[250px]   md:-bottom-0 md:left-[18%] ">
        <img src="/images/about/Goose.PNG" className="mx-auto  w-1/2" alt="" />
        <WinkEffect className="left-[60%] top-[31%] w-[28%] " />
        <WinkEffect className="left-[14%] top-[20%] w-[30%]" />
        <WinkEffect className="bottom-[5%] left-[10%] w-[40%]" />
        <WinkEffect className="bottom-[-2%] right-[24%] w-[15%]" />
      </div>
    </div>
  );
};
export default GooseImg;
