import { forwardRef } from "react";

const Faqs = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="w-full min-h-screen bg-center bg-cover"
    >
      Faqs
    </div>
  );
});

export default Faqs;
