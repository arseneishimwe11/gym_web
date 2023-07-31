import React, { useState } from "react";
import Logo from "../../src/assets/white logo.png";
import tool from "../../src/assets/tool.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    names: "",
    phone: "",
    city: "",
    gender: "",
    age: "",
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
      // if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
      //   M.toast({ html: "Invalid Email !" });
      //   return;
      // }

      const response = await axios.post("http://localhost:3000/auth/signup",
        {
          names: input.names,
          phone: input.phone,
          city: input.city,
          gender:input.gender,
          age:input.age,
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
        <p className="font-fugaz text-[25px] text-title pt-4 text-center">
          Welcome to Platinum Gym
        </p>
        <p className="font-convergence text-[30px] text-center py-3 font-bold text-gray-800">
          SIGNUP
        </p>
        <form onSubmit={(e)=>{e.preventDefault()}} method="POST" className="text-center">
          <div>
            <input
              type="text"
              id="names"
              name="names"
              value={input.names}
              className="py-2 px-5 focus:outline-none border border-gray-400 bg-white w-[50%] mb-3 rounded-[6px]"
              placeholder="Full Names"
              onChange={handleInput}
            />
          </div>
          <div>
            <input
              type="text"
              id="city"
              name="city"
              value={input.city}
              className="py-2 px-5 focus:outline-none border border-gray-400 bg-white w-[50%] mb-3 rounded-[6px]"
              placeholder="Town/City"
              onChange={handleInput}
            />
          </div>
          <div>
            <input
              type="number"
              id="phone"
              name="phone"
              value={input.phone}
              className="py-2 px-5 focus:outline-none border border-gray-400 bg-white w-[50%] mb-3 rounded-[6px]"
              placeholder="Cell Phone"
              onChange={handleInput}
            />
          </div>
          <div className="flex gap-[-3px] ml-[184px]">
            <div>
              <select
                name="gender"
                id="gender"
                value={input.gender}
                onChange={handleInput}
                className="py-2 px-4 focus:outline-none border border-gray-400 bg-white w-[13.1vw] mb-3 rounded-[6px] text-gray-400">
                <option value="" disabled selected>
                  Gender
                </option>
                <option value="Male" className="text-black">
                  Male
                </option>
                <option value="Female" className="text-black">
                  Female
                </option>
              </select>
            </div>
            <div>
              <input
                type="number"
                id="age"
                name="age"
                value={input.age}
                onChange={handleInput}
                className="py-2 px-5 focus:outline-none border border-gray-400 bg-white w-[80%] mb-3 rounded-[6px]"
                placeholder="Age"
              />
            </div>
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={input.password}
              className="py-2 px-5 focus:outline-none border border-gray-400 bg-white w-[50%] mb-3 rounded-[6px]"
              placeholder="Password"
              onChange={handleInput}
            />
          </div>
          <div className="text-gray-600 w-[50%] ml-[110px]">
            <input type="checkbox" id="check" className="mr-2" required/>
            <span className="text-[14px]">
              I agree to <u className="text-gray-700">terms and conditions</u>
            </span>
          </div>
          <div>
            <input
              type="submit"
              id="submit"
              value="Register"
              onClick={() => addUser()}
              className="bg-page-orange py-[7px] px-[145px] rounded-[5px] text-[20px] mt-5 font-bold text-white"
            />
          </div>
        </form>
        <div className="text-center text-gray-600 font-convergence pt-1 text-[15px]">
          <p>
            Already have an account?{" "}
            <span>
              <button className="text-page-orange underline">
                <Link to="/auth/login">Log In</Link>
              </button>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
