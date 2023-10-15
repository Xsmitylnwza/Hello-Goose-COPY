import Flower from "./Flower";

const EventsTablet = () => {
  const flowers = [
    { postion: "left-[-2%] top-[28%] w-[14%]", colorFlower: "pink" },
    { postion: "right-[1%] top-[25%] w-[13%]", colorFlower: "orange" },
    { postion: "bottom-[32%] right-[2%] w-[12%]", colorFlower: "pink" },
    { postion: "bottom-[28%] left-[-13%] w-[18%]", colorFlower: "purple" },
  ];
  return (
    <div className="relative my-auto  w-[90%] md:hidden  mobileS:hidden  TabletV:block ">
      <img
        className="mx-auto    "
        src="/images/events/eventTablet.png"
        alt="eventTablet"
      />
      {flowers.map(({ postion, colorFlower }) => (
        <Flower className={postion} colorFlower={colorFlower} />
      ))}
    </div>
  );
};

export default EventsTablet;
