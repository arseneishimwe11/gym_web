import React, { useState } from "react";
import Logo from "../../src/assets/white logo.png";
import tool from "../../src/assets/tool.png";
import axios from "axios";

const PaymentForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    try {
      // Replace with your backend URL
      const backendUrl = "http://localhost:3000/api/payment/momo";

      // Send payment details to the backend
      const response = await axios.post(
        backendUrl,
        {
          phoneNumber,
          amount,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex">
      <div className="bg-landing-bg w-[40%] h-screen">
        <img
          src={tool}
          alt="Gym tool"
          className="rounded-[50%] w-[12%] h-[55px] relative top-[15px] left-[420px]"
        />
        <img
          src={Logo}
          alt="Platinum Gym Logo"
          className="w-[60%] relative top-[60px] left-[90px]"
        />
        <p className="mt-12">
          <span className="uppercase text-[38px] text-white font-fugaz pl-10">
            Build your
          </span>
          <span className="uppercase text-[35px] font-bold font-fugaz empower-txt text-transparent relative top-12 left-[-50px] w-[100vw]">
            dream body
          </span>
        </p>
        <img
          src={tool}
          alt="Gym tool"
          className="rounded-[50%] w-[12%] h-[55px] relative top-[110px] left-[30px]"
        />
      </div>
      <div className="bg-semi-white p-4 w-[60%]">
        <h2 className="font-convergence font-bold text-[25px] text-title pt-4 pb-5 text-center">
          Pay with Mobile Money
        </h2>
        <form onSubmit={(e) => e.preventDefault()} className="text-center">
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              className="py-2 px-5 focus:outline-none border border-gray-400 bg-white w-[50%] mb-3 rounded-[6px]"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              name="amount"
              className="py-2 px-5 focus:outline-none border border-gray-400 bg-white w-[50%] mb-3 rounded-[6px]"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Pay with MoMo"
              onClick={() => handleSubmit()}
              className="bg-page-orange py-[9px] px-[110px] rounded-[5px] text-[20px] mt-5 font-bold text-white"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
