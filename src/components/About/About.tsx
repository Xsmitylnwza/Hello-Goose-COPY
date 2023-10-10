import { HTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import AboutText from "./AboutText";
import GooseImg from "./GooseImg";
import TitleAbout from "./TitleAbout";
import CloudImg from "./CloudImg";

type AboutProps = HTMLAttributes<HTMLDivElement>;

const About = forwardRef<HTMLDivElement, AboutProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={twMerge(
          "flex-center-col  z-1 relative min-h-screen  bg-background-about  bg-cover bg-center bg-no-repeat ",
          className,
        )}
        {...props}
        ref={ref}
      >
        <CloudImg />
        <TitleAbout />
        <div className=" w-screen  flex-col px-10">
          <div className="about-data  flex flex-row">
            <GooseImg />
            <AboutText />
          </div>
        </div>
      </div>
    );
  },
);

export default About;
