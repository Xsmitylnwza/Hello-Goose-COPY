import React, { ImgHTMLAttributes } from "react";
const WinkEffect: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  ...rest
}) => {
  return (
    <img
      src="/images/about/Wink.PNG"
      {...rest} //
    />
  );
};

export default WinkEffect;
