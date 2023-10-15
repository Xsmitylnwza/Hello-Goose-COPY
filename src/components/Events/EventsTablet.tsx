import { useRef } from "react";
import Flower from "./Flower";

const EventsTablet = () => {
  const eventRef = useRef<HTMLDivElement>(null);
  const flowers = [
    { postion: "left-[-2%] top-[28%] w-[14%]", colorFlower: "pink" },
    { postion: "right-[1%] top-[25%] w-[13%]", colorFlower: "orange" },
    { postion: "bottom-[32%] right-[2%] w-[12%]", colorFlower: "pink" },
    { postion: "bottom-[28%] left-[-13%] w-[18%]", colorFlower: "purple" },
  ];
  return (
    <div ref={eventRef} className="mobileS:hidden TabletV:block  relative bottom-0  w-[90%]  md:hidden ">
      <img
        className="mx-auto "
        src="/images/events/eventTablet.png"
        alt="eventTablet"
      />
      {flowers.map(({ postion, colorFlower }, index) => (
        <Flower className={postion} colorFlower={colorFlower} key={index} delay={index * 0.2}/>
      ))}
    </div>
  );
};

export default EventsTablet;
