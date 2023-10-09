import React, { ImgHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
const WinkEffect: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  className,
  ...rest
}) => {
  return (
    <img
      src="/images/about/Wink.PNG"
      className={twMerge("absolute", className)}
      {...rest} //
    />
  );
};

export default WinkEffect;
