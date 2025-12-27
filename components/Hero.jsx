import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="w-[375px]  h-screen flex flex-col justify-end items-start bg-[#F7F8F9] px-5  py-10 gap-2">
        <h1 className="text-[28px] text-[#1D2226] font-semibold font-rubik">
          Welcome to PopX
        </h1>
        <p className="text-[18px] text-[#1D2226] mb-6">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipisicing elit.
        </p>
        <Link
          to={"/register"}
          className="w-full h-11 bg-[#6C25FF] flex justify-center items-center text-white font-medium text-[16px] cursor-pointer rounded-md"
        >
          <button className="cursor-pointer">Create Account</button>
        </Link>
        <Link
          to={"/login"}
          className="w-full h-11 bg-[#6C25FF4B] flex justify-center items-center text-black font-medium text-[16px] cursor-pointer rounded-md"
        >
          <button className="cursor-pointer">Already Registered? Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
