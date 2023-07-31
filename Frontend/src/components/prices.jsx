import React from "react";
import armStrong from "../assets/prices.png";
import tick from "../assets/pick.png";
const Prices = (props) => {
  return (
    <div>
      <div className="bg-semi-black text-white font-convergence w-[100%] pr-8 pl-4 pb-10 pt-4 rounded-[8px] mb-10">
        <div className="flex">
          <img src={armStrong} alt="armstrong" className="w-[80px]" />
          <p className="text-[25px] relative top-[20px] flex-none font-fugaz pb-10">
            {props.title}
          </p>
        </div>
        <div className="flex">
          <div className="flex grow">
            <img src={tick} alt="tick" className="w-[40px]" />
            <p className="relative top-[5px] text-[18px]">Daily</p>
          </div>
          <p className="text-[15px] relative top-[8.5px] flex-none">
            {props.dailyPrice}
          </p>
        </div>
        <div className="flex">
          <div className="flex grow">
            <img src={tick} alt="tick" className="w-[40px]" />
            <p className="relative top-[5px] text-[18px]">Monthly</p>
          </div>
          <p className="text-[15px] relative top-[8.5px] flex-none">
            {props.monthlyPrice}
          </p>
        </div>
        <div className="flex">
          <div className="flex grow">
            <img src={tick} alt="tick" className="w-[40px]" />
            <p className="relative top-[5px] text-[18px]">3 Months</p>
          </div>
          <p className="text-[15px] relative top-[8.5px] flex-none">
            {props.threemonthPrice}
          </p>
        </div>
        <div className="flex">
          <div className="flex grow">
            <img src={tick} alt="tick" className="w-[40px]" />
            <p className="relative top-[5px] text-[18px]">6 Months</p>
          </div>
          <p className="text-[15px] relative top-[8.5px] flex-none">
            {props.sixmonthPrice}
          </p>
        </div>
        <div className="flex">
          <div className="flex grow">
            <img src={tick} alt="tick" className="w-[40px]" />
            <p className="relative top-[5px] text-[18px]">Annual</p>
          </div>
          <p className="text-[15px] relative top-[8.5px] flex-none">
            {props.annualPrice}
          </p>
        </div>
        <button className="bg-page-orange py-[3px] px-[25px] rounded-[5px] text-[20px] mx-12 mt-5 font-bold">
          Purchase Now<i class="uil uil-arrow-right ml-3"></i>
        </button>
      </div>
    </div>
  );
};

export default Prices;
