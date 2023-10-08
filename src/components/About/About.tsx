


const About = () => {
  return <><div className="relative min-h-screen w-full bg-bottom bg-no-repeat bg-cover flex-center-col  bg-background-about bg-p">
     <img className="absolute top-1 w-screen -z-20 "
      src="/images/about/Cloud.PNG" alt="cloud" />
      <div className=" flex-col  w-screen">
       <p className="font-cherry text-[64px]  text-center mb-5 text-white">Welcom to Hello <br/> World Goose!</p>
       <div className="about-data flex flex-row">
        <img src="/images/about/Goose.PNG"className="w-1/5 ml-16"  alt="" />
        <div className="w-3/4 flex flex-row items-center justify-center">
        <div className="text-box bg-white opacity-75 w-5/6  h-4/6 rounded-[30px]"></div>
        </div>
       </div>
      </div>
  </div>
  
  </>
};

export default About;
