import { forwardRef } from "react";
import EventsMobile from "./EventsMobile";
import EventsDesktop from "./EventsDesktop";
import EventsTablet from "./EventsTablet";

const Events = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className="bg-background-event flex-center relative flex min-h-screen min-w-full flex-col overflow-hidden bg-cover
       bg-[center_top_-15rem] bg-no-repeat mobileL:justify-end  mobileL:pb-5 md:justify-center md:pb-0"
    >
      <EventsMobile />
      <EventsDesktop />
      <EventsTablet />
    </div>
  );
});

export default Events;
