import { forwardRef } from "react";

const Events = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} {...props} className="min-h-screen flex-center">
      Events
    </div>
  );
});

export default Events;
