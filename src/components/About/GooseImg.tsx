import React from "react";
import WinkEffect from "./WinkEffect";
const GooseImg = function () {
  return (
    <div className="relative  z-10 flex w-2/5 items-center justify-center ">
      <img
        src="/images/about/Goose.PNG"
        className="mx-auto ml-[43%] w-1/2"
        alt=""
      />
      <WinkEffect />
    </div>
  );
};
export default GooseImg;
