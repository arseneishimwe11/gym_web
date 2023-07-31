import React from "react";
import "../src/index.css";
import HeaderNav from "../src/components/headerNav";
import landing_bg from "../src/assets/landing_bg.png";

const LandingPage = () => {
  return (
    <div className="bg-landing-bg h-screen">
      <div className="trimmed-part bg-trim h-[100vh] w-[44.2%] absolute left-[44em] overflow-hidden z-1"></div>
      <HeaderNav />
      <div className="text-white p-[30px]">
        <div>
          <div>
            <img
              src={landing_bg}
              alt="Landing Background"
              className="w-[29%] absolute left-[720px] top-[80px]"
            />
          </div>
          <div className="pt-[150px] font-fugaz">
            <p className="uppercase text-[40px] text-transparent empower-txt ml-[100px]">
              Empower yourself
            </p>
            <p className="uppercase text-[55px] font-bold">
              Transform your body
            </p>
            <p className="text-[20px] relative top-[-10px] font-convergence italic">
              A serious gym for serious workouts in Kigali
            </p>
            <p className="text-[20px] pb-[10px]">KK 31 Ave, SAWA CITY REBERO</p>
          </div>
        </div>
        <div>
          <button className="bg-page-orange py-[7px] px-[40px] rounded-[5px] text-[20px] ">
            Get Started<i class="uil uil-arrow-right ml-3"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
