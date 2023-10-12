import WinkEffect from "./WinkEffect";
const winks = [
  { className: "left-[60%] top-[31%] w-[28%]" },
  { className: "left-[14%] top-[20%] w-[30%]" },
  { className: "bottom-[5%] left-[10%] w-[40%]" },
  { className: "bottom-[-2%] right-[24%] w-[15%]" },
];
const GooseImg = function () {
  return (
    <div className="mobileL:-bottom-2 absolute bottom-[-77px] z-10  flex w-2/5 items-center justify-center md:static  md:bottom-0 md:justify-start">
      <div className="mobileL:min-w-[305px] relative -bottom-12  min-w-[163px]   md:-bottom-0 lg:left-[18%] ">
        <img src="/images/about/Goose.PNG" className="mx-auto  w-1/2" alt="" />
        {winks.map((wink, index) => (
          <WinkEffect
            key={index}
            {...wink}
            className={wink.className}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};
export default GooseImg;
