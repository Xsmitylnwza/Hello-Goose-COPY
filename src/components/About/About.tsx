import { HTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type AboutProps = HTMLAttributes<HTMLDivElement>;

const About = forwardRef<HTMLDivElement, AboutProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={twMerge(
          "flex-center-col bg-p relative min-h-screen w-full bg-background-about bg-cover  bg-bottom bg-no-repeat",
          className,
        )}
        {...props}
        ref={ref}
      >
        <img
          className="absolute top-1 -z-20 w-screen "
          src="/images/about/Cloud.PNG"
          alt="cloud"
        />
        <div className=" w-screen  flex-col">
          <p className="mb-5 text-center  font-cherry text-[64px] text-white">
            Welcom to <br />
            Hello World Goose!
          </p>
          <div className="about-data flex flex-row">
            <img src="/images/about/Goose.PNG" className="ml-16 w-1/5" alt="" />
            <div className="flex w-3/4 flex-row items-center justify-center">
              <div className="text-box h-4/6 w-5/6 rounded-[30px]  bg-white opacity-75"></div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default About;
