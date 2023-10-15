import { forwardRef } from "react";
import EventsMobile from "./EventsMobile";
import EventsDesktop from "./EventsDesktop";
import EventsTablet from "./EventsTablet";

const Events = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="flex-center relative z-[-5] flex min-h-screen min-w-full flex-col overflow-hidden bg-background-event bg-cover
       bg-[center_top_-15rem] bg-no-repeat md:justify-center  md:pb-0 mobileL:justify-end mobileL:pb-5"
    >
      <EventsMobile />
      <EventsDesktop />
      <EventsTablet />
    </div>
  );
});

export default Events;
