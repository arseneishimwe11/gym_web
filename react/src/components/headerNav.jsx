import React, { useState } from "react";
import Logo from "../assets/white logo.png";
import "../index.css";

const HeaderNav = () => {
  return (
    <div className="flex w-[100vw] text-white gap-[470px] relative z-10 font-convergence py-3 px-[50px]">
      <img src={Logo} alt="Platinum Gym Logo" className="w-[12%]" />
      <div className="">
        <a href="#" className="mr-[50px] focus:text-page-orange">
          Home
        </a>
        <a href="#" className="mr-[50px] focus:text-page-orange">
          Program
        </a>
        <a href="#" className="mr-[50px] focus:text-page-orange">
          About us
        </a>
        <a href="#" className="mr-[50px] focus:text-page-orange ">
          Pricing
        </a>
        <button className="text-black bg-white pt-[1px] pb-[3px] px-[15px] rounded-[5px] ">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default HeaderNav;
