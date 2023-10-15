import Flower from "./Flower";

const EventsMobile = () => {
  const flowers = [
    { postion: "left-0 top-[-5%] w-[12%]", colorFlower: "pink" },
    { postion: "right-[5%] top-[5%] w-[10%]", colorFlower: "orange" },
    { postion: "bottom-[32%] right-[11%] w-[11%]", colorFlower: "pink" },
    { postion: "bottom-[4%] left-[6%] w-[15%]", colorFlower: "purple" },
  ];
  return (
    <div className="relative flex-center h-max md:hidden">
      <img className="w-[92%]" src="/images/events/eventMobile.png" alt="" />
      {flowers.map(({ postion, colorFlower }, index) => (
        <Flower className={postion} colorFlower={colorFlower} key={index} delay={index * 0.2}/>
      ))}
    </div>
  );
};

export default EventsMobile;
