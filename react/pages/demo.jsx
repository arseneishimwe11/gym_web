import React from "react";
import demoImage from "../src/assets/demo.jpg";

const Demo = () => {
  return (
    <div className="flex justify-evenly py-10 bg-landing-bg">
      <img src={demoImage} alt="Inside the platinum gym" className="w-[30%] h-[92vh] rounded-[10px]"/>
      <img src={demoImage} alt="Inside the platinum gym" className="w-[30%] h-[92vh] rounded-[10px]"/>
      <img src={demoImage} alt="Inside the platinum gym" className="w-[30%] h-[92vh] rounded-[10px]" />
    </div>
  );
};

export default Demo;
