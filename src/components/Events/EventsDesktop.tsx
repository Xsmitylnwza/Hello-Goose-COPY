import Flower from "./Flower";

const EventsDesktop = () => {
  const flowers = [
    { postion: "left-[7%] top-[16%] w-[10%]", colorFlower: "pink" },
    { postion: "right-[1%] top-[5%] w-[9%]", colorFlower: "orange" },
    { postion: "bottom-[32%] right-[2%] w-[12%]", colorFlower: "pink" },
    { postion: "bottom-[33%] left-[-5%] w-[12%]", colorFlower: "purple" },
  ];
  return (
    <div className="relative items-center justify-center hidden TabletV:hidden h-max md:block">
      <img
        className="mx-auto w-[87%] "
        src="/images/events/eventDesktop.png"
        alt=""
      />
      {flowers.map(({ postion, colorFlower }, index) => (
        <Flower className={postion} colorFlower={colorFlower} key={index} />
      ))}
    </div>
  );
};

export default EventsDesktop;
