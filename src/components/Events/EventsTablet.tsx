import { useRef } from "react";
import Flower from "./Flower";

const EventsTablet = () => {
  const eventRef = useRef<HTMLDivElement>(null);
  const flowers = [
    { postion: "left-[7%] top-[16%] w-[10%]", colorFlower: "pink" },
    { postion: "right-[1%] top-[5%] w-[9%]", colorFlower: "orange" },
    { postion: "bottom-[32%] right-[2%] w-[12%]", colorFlower: "pink" },
    { postion: "bottom-[33%] left-[-5%] w-[12%]", colorFlower: "purple" },
  ];
  return (
    <div ref={eventRef} className="mobileS:hidden TabletV:block  relative bottom-0  w-[90%]  md:hidden ">
      <img
        className="mx-auto "
        src="/images/events/eventTablet.png"
        alt=""
      />
      {flowers.map(({ postion, colorFlower }, index) => (
        <Flower className={postion} colorFlower={colorFlower} key={index} delay={index * 0.2}/>
      ))}
    </div>
  );
};

export default EventsTablet;
