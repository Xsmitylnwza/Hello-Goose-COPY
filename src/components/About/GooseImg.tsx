import WinkEffect from "./WinkEffect";
const GooseImg = function () {
  return (
    <div className="relative  z-10 flex w-2/5 items-center justify-center ">
      <img
        src="/images/about/Goose.PNG"
        className="mx-auto ml-[43%] w-1/2"
        alt=""
      />
      <WinkEffect className="left-[76%] top-[31%] w-[28%] " />
      <WinkEffect className="left-[30%] top-[20%] w-[30%]" />
      <WinkEffect className="bottom-[5%] left-[26%] w-[40%]" />
      <WinkEffect className="bottom-[-2%] right-[8%] w-[15%]" />
    </div>
  );
};
export default GooseImg;
