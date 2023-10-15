import { useRef } from "react";
import Flower from "./Flower";

const EventsTablet = () => {
  const eventRef = useRef<HTMLDivElement>(null);
  const flowers = [
    { postion: "left-[-2%] top-[32%] w-[14%]", colorFlower: "pink" },
    { postion: "right-[1%] top-[25%] w-[13%]", colorFlower: "orange" },
    { postion: "bottom-[23%] right-[-5%] w-[16%]", colorFlower: "pink" },
    { postion: "bottom-[28%] left-[-13%] w-[18%]", colorFlower: "purple" },
  ];
  return (
    <div
      ref={eventRef}
      className="relative flex w-[90%]   md:hidden  mobileS:hidden TabletV:block"
    >
      <img
        className="z-1 "
        src="/images/events/eventTablet.png"
        alt="eventTablet"
      />
      {flowers.map(({ postion, colorFlower }, index) => (
        <Flower
          className={postion}
          colorFlower={colorFlower}
          key={index}
          delay={index}
        />
      ))}
    </div>
  );
};

export default EventsTablet;
