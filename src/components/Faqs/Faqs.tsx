import { forwardRef } from "react";
import FaqBox from "./FaqBox";



const Faqs = forwardRef<HTMLDivElement>((props, ref) => {
  return (
      <div ref={ref} {...props} className=" min-h-screen   bg-background-faqs w-full h-full bg-no-repeat bg-center bg-cover TabletV:bg-center mobileL:bg-center">
        <div className="mx-5 md:mx-32 lg:mx-56">
          <div className="flex  justify-center text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-[40px] mt-24 mb-5 mobileL:text-[28px] ">FAQs</div>
          <div className=""><FaqBox/></div>
        </div>
        
      </div>

  );
});

export default Faqs;
