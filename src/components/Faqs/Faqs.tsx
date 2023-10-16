import { forwardRef } from "react";
import FaqBox from "./FaqBox";



const Faqs = forwardRef<HTMLDivElement>((props, ref) => {
  return (
      <div ref={ref} {...props} className="w-full h-full min-h-screen py-6 bg-center bg-no-repeat bg-cover bg-background-faqs TabletV:bg-center mobileL:bg-center">
        <div className="mx-5 md:mx-32 lg:mx-56 xl:max-w-[60rem] xl:mx-auto">
          <div className="flex  justify-center text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-[40px] xl:text-[4rem] mb-5 mobileL:text-[28px] ">FAQs</div>
          <FaqBox/>
        </div>    
      </div>

  );
});

export default Faqs;
