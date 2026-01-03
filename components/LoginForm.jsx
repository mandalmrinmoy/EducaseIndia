import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate=useNavigate()
  const handleChnage = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = localStorage.getItem("createUser");
    const saveData = JSON.parse(data);

    if (!saveData) {
      setError("no data found");
    }

    const matchData = saveData.find(
      (user) => user.email === input.email && user.password === input.password
    );
    if (matchData) {
      navigate("/account");
    }else {
      setError("Invalid email or password");
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[375px]  h-screen flex flex-col justify-start items-start bg-[#F7F8F9] px-5  py-10 gap-2">
        <h1 className="text-[28px] text-[#1D2226] font-medium font-rubik">
          Signin to your <br /> PopX account
        </h1>
        <p className="text-[18px] text-[#1D2226] mb-6">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipisicing elit.
        </p>
        <form action="" onSubmit={handleSubmit}>
          <div className="relative">
            <label
              htmlFor=""
              className="text-[13px] text-[#6C25FF] absolute -top-3 left-3 bg-gray-100 px-1"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleChnage}
              placeholder="Enter email address"
              className="w-80 h-10 border border-[#CBCBCB] rounded-md px-3 font-semibold text-gray-800 outline-purple-700"
            />
          </div>
          <div className="relative mt-7">
            <label
              htmlFor=""
              className="text-[13px] text-[#6C25FF] absolute -top-3 left-3 bg-gray-100 px-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={handleChnage}
              placeholder="Enter password"
              className="w-80 h-10 border border-[#CBCBCB] rounded-md px-3 font-semibold text-gray-800 outline-purple-700"
            />
          </div>
            <button className="w-full h-11.5 bg-[#CBCBCB] mt-7 text-white flex justify-center items-center font-medium text-lg cursor-pointer rounded-md">
              Login
            </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
