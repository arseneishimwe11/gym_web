import React, { useState } from "react";
import Logo from "../../src/assets/white logo.png";
import tool from "../../src/assets/tool.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    phone: "",
    password: "",
  });
  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const addUser = async () => {
    try {
      // if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.phone)) {
      //   M.toast({ html: "Invalid Email !" });
      //   return;
      // }

      const response = await axios.post(
        "http://localhost:3000/auth/login",
        {
          phone: input.phone,
          password: input.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      if (!data.error) {
        navigate("/profile");
      }
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
        <p className="font-fugaz text-[25px] text-title pt-[100px] text-center">
          Welcome to Platinum Gym
        </p>
        <p className="font-convergence text-[30px] text-center py-3 font-bold text-gray-800">LOGIN</p>
        <form onSubmit={(e)=>{e.preventDefault()}} className="text-center">
          <div>
            <input
              type="number"
              id="phone"
              name="phone"
              onChange={handleInput}
              className="py-2 px-5 focus:outline-none border border-gray-400 bg-white w-[50%] mb-3 rounded-[6px]"
              placeholder="Cell Phone"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleInput}
              className="py-2 px-5 focus:outline-none border border-gray-400 bg-white w-[50%] rounded-[6px]"
              placeholder="Password"
            />
            <p className="ml-[250px] text-gray-700 text-[14px] hover:text-page-orange hover:cursor-pointer">Forgot Password?</p>
          </div>
          <div>
            <input
              type="submit"
              id="submit"
              value="Log In"
              onClick={()=>addUser()}
              className="bg-page-orange py-[6px] px-[153px] rounded-[5px] text-[20px] mt-5 font-bold text-white"
            />
          </div>
        </form>
        <div className="text-center text-gray-600 font-convergence pt-1 text-[15px]">
          <p>
            Don't have an account?{" "}
            <span>
              <button className="text-page-orange underline"><Link to="/auth/signup">Sign Up</Link></button>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
