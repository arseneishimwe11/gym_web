import React, { useState } from "react";
import LoggedNavBar from "../../src/components/loggedNavBar";
import "../../src/index.css";

const Homefeed = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="bg-landing-bg h-screen">
      <LoggedNavBar />
      <div className="flex px-12 font-convergence pt-[150px] text-white">
        <div className="ml-[200px]">
          <p className="text-[80px] w-[80%]">
            <span className="text-page-orange">Hello 👋</span>
            <span className="relative top-[-30px]"> {"Arsene"} !</span>
          </p>
          <p className="text-[20px] font-bold relative top-[-30px]">
            Welcome again in Platinum Gym
          </p>
        </div>
        <div className="mr-[120px]">
          <div>
            <button
              className={`${
                isHovered ? "start" : "empower-txt"
              } text-[25px] border border-page-orange py-[8px] px-12 my-5 rounded-[10px] w-[29vw] hover:bg-page-orange hover:text-white hover:font-bold start`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Start your fitness plan
            </button>
          </div>
          <div>
          <button
              className={`${
                isHovered ? "start" : "empower-txt"
              } text-[25px] border border-page-orange py-[8px] px-12 my-5 rounded-[10px] w-[29vw] hover:bg-page-orange hover:text-white hover:font-bold start`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              View the timetable
            </button>
          </div>
          <div>
          <button
              className={`${
                isHovered ? "start" : "empower-txt"
              } text-[25px] border border-page-orange py-[8px] px-12 my-5 rounded-[10px] w-[29vw] hover:bg-page-orange hover:text-white hover:font-bold start`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Choose your trainer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homefeed;
