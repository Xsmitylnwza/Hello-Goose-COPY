import WinkEffect from "./WinkEffect";
const GooseImg = function () {
  return (
    <div className=" z-10 flex w-2/5 items-center">
      <div className="relative left-20">
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
