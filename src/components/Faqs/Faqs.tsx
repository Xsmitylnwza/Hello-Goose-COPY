import { forwardRef } from "react";

const Faqs = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} {...props} className="min-h-screen flex-center">
      Faqs
    </div>
  );
});

export default Faqs;
