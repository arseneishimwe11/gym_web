import React from "react";
import logo from "../src/assets/white logo.png";
import twitter from "../src/assets/twitter.png";
import insta from "../src/assets/instagram.png";
import email from "../src/assets/email.png";
import phone from "../src/assets/phone.png";

const Footer = () => {
  return (
    <div className="text-white bg-landing-bg pt-16 pb-12 flex px-[60px]">
      <div>
        <div className="flex">
          <img src={logo} alt="Platinum Gym Logo" className="w-[18%]" />
          <form action="#" method="POST">
            <div className="pb-3">
              <input
                type="email"
                placeholder="Email"
                className="focus:outline-none border-[1.5px] py-[3px] px-2 rounded-[4px] border-white bg-landing-bg"
              />
              <input
                type="button"
                value="Subscribe"
                name="subscribe"
                id="subscribe"
                className="bg-page-orange py-[3px] px-[25px] rounded-[5px] text-[20px] mx-2 mt-5 font-bold font-convergence"
              />
            </div>
            <p className="font-convergence">
              Subscribe to follow up with Platinum Gym updates
            </p>
          </form>
        </div>
        <div className="flex font-convergence pt-[40px] text-[15px]">
          <div>
            <p className="underline pb-2">Follow Us on:</p>
            <div className="flex">
              <img src={twitter} alt="Twitter" className="w-[12%]" />
              <a href="" className="mt-2">@platinumGymKGL</a>
            </div>
            <div className="flex pt-3">
              <img src={insta} alt="Instgram" className="w-[12%]" />
              <a href="" className="mt-2">platinumgymkigali</a>
            </div>
          </div>
          <div className="relative left-[-100px]">
            <p className="underline pb-2">Contact Us:</p>
            <div className="flex">
              <img src={phone} alt="Phone" className="w-[10%]" />
              <p className="mt-1">+250788318524</p>
            </div>
            <div className="flex pt-3">
              <img src={email} alt="Email" className="w-[10%]" />
              platinumgymkigali@gmail.com
              <br />
              admin@platinumgymkigali.com
            </div>
          </div>
        </div>
      </div>
      <div className="relative left-[-0px] top-[30px] w-[60%]">
        <p className="uppercase font-fugaz text-[20px] text-orange-400 ml-[40px] pb-2">Membership Benefits</p>
        <ul className="li list-disc text-[18px] font-convergence">
          <li>Changing Room facilities(Hot & Cold water)</li>
          <li>Aerobics classes and other group training included</li>
          <li>Internet Wi-Fi(Cardio Vascular Machines connected)</li>
          <li>Including a Trainer on Duty for Guidance</li>
        </ul>
        <p className="font-bold mt-2"><u className="text-orange-400">Notice:</u> PERSONAL TRAINING (COST APPLIED)</p>
      </div>
    </div>
  );
};

export default Footer;
