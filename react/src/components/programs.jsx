import React from "react";

const Programs = (props) => {
  return (
    <div className="bg-semi-black rounded-[10px] w-[30%] p-10 font-convergence my-10 h-[70vh]">
      <img src={props.image} alt="Program pic" className="rounded-[50%] w-[60px] h-[58px] mb-3"/>
      <p className="font-bold text-[25px] pb-[10px] text-page-orange">{props.title}</p>
      <p>{props.content}</p>
    </div>
  );
};

export default Programs;
