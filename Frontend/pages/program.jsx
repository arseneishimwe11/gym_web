import React from "react";
import Programs from "../src/components/programs";
import Tool from "../src/assets/tool.png"

const Program = () => {
    const content1 = "We provide many services of weight lifting and more othersWe provide many services of weight lifting and more others"
  return (
    <div className="bg-landing-bg text-white pt-[50px]">
      <div className="text-center">
        <p className="font-fugaz text-[40px]">Programs and Services</p>
        <p className=""><span className="uppercase text-[40px] text-transparent dream-body font-fugaz">Build your</span><span className="uppercase text-[40px] font-bold font-fugaz"> dream body</span></p>
      </div>
      <div className="flex justify-evenly ">
        <Programs
          image={Tool}
          title={`Weight lifting`}
          content={content1}
        />
        <Programs
          image={Tool}
          title={`Weight lifting`}
          content={content1}
        />
        <Programs
          image={Tool}
          title={`Weight lifting`}
          content={content1}
        />
      </div>
    </div>
  );
};

export default Program;
