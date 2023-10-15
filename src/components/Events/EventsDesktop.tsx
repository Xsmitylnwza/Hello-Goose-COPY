import Flower from "./Flower";

const EventsDesktop = () => {
  const flowers = [
    { postion: "left-[7%] top-[16%] w-[10%]", colorFlower: "pink" },
    { postion: "right-[1%] top-[5%] w-[9%]", colorFlower: "orange" },
    { postion: "bottom-[32%] right-[2%] w-[12%]", colorFlower: "pink" },
    { postion: "bottom-[33%] left-[-5%] w-[12%]", colorFlower: "purple" },
  ];
  return (
    <div className="TabletV:hidden relative  hidden h-max items-center justify-center md:block">
      <img
        className="mx-auto w-[87%] "
        src="/images/events/eventDesktop.png"
        alt=""
      />
      {flowers.map(({ postion, colorFlower }) => (
        <Flower className={postion} colorFlower={colorFlower} />
      ))}
    </div>
  );
};

export default EventsDesktop;
