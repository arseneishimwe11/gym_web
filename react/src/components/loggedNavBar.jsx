import React from 'react'
import Logo from "../assets/white logo.png";


const LoggedNavBar = () => {
  return (
      <div className="flex w-[100vw] text-white gap-[550px] fixed z-10 font-convergence py-3 px-[50px]">
      <img src={Logo} alt="Platinum Gym Logo" className="w-[12%]" />
      <div className="">
        <a href="#" className="mr-[50px] focus:text-page-orange">
          Profile
        </a>
        <a href="#" className="mr-[50px] focus:text-page-orange">
          Our Gym
        </a>
        <a href="#" className="mr-[50px] focus:text-page-orange">
          Address
        </a>
        <button className="text-black bg-white pt-[1px] pb-[3px] px-[25px] rounded-[5px] hover:text-white hover:bg-page-orange">
          Log Out
        </button>
      </div>
    </div>
  )
}

export default LoggedNavBar
