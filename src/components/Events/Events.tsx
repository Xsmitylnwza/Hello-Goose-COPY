import { forwardRef } from "react";
import EventsMobile from "./EventsMobile";

const Events = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="bg-background-event flex-center relative flex min-h-screen min-w-full flex-col
       bg-cover bg-[center_top_-15rem] bg-no-repeat "
    >
      <EventsMobile />
    </div>
  );
});

export default Events;
