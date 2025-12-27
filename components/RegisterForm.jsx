import React from "react";
import { Link } from "react-router-dom";
const RegisterForm = () => {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[375px] h-screen flex flex-col justify-start items-start bg-[#F7F8F9] px-5  py-10 gap-2">
          <h1 className="text-[28px] text-[#1D2226] font-medium font-rubik mb-5">
            Create your <br />
            PopX account
          </h1>
          <form action="">
            <div className="relative">
              <label
                htmlFor=""
                className="text-sm text-[#6C25FF] absolute -top-3 left-3 bg-gray-100 px-1"
              >
                Full Name<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                placeholder="Marry Deo"
                className="w-80 h-10 border-2 border-gray-300 rounded-md px-3 placeholder:text-[#1D2226] outline-purple-700"
              />
            </div>
            <div className="relative mt-7">
              <label
                htmlFor=""
                className="text-sm text-[#6C25FF] absolute -top-3 left-3 bg-gray-100 px-1"
              >
                Phone number<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                placeholder="Marry Deo"
                className="w-80 h-10 border-2 border-gray-300 rounded-md px-3 placeholder:text-[#1D2226] outline-purple-700"
              />
            </div>
            <div className="relative mt-7">
              <label
                htmlFor=""
                className="text-sm text-[#6C25FF] absolute -top-3 left-3 bg-gray-100 px-1"
              >
                Email address<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                placeholder="Marry Deo"
                className="w-80 h-10 border-2 border-gray-300 rounded-md px-3 placeholder:text-[#1D2226] outline-purple-700"
              />
            </div>
            <div className="relative mt-7">
              <label
                htmlFor=""
                className="text-sm text-[#6C25FF] absolute -top-3 left-3 bg-gray-100 px-1"
              >
                Password<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                placeholder="Marry Deo"
                className="w-80 h-10 border-2 border-gray-300 rounded-md px-3 placeholder:text-[#1D2226] outline-purple-700"
              />
            </div>
            <div className="relative mt-7">
              <label
                htmlFor=""
                className="text-sm text-[#6C25FF] absolute -top-3 left-3 bg-gray-100 px-1"
              >
                Company name
              </label>
              <input
                type="email"
                placeholder="Marry Deo"
                className="w-80 h-10 border-2 border-gray-300 rounded-md px-3 placeholder:text-[#1D2226] outline-purple-700"
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor=""
                className="font-semibold text-[#1D2226] text-[13px]"
              >
                Are you an Agency?<span className="text-red-600">*</span>
              </label>
              <br />
              <div className="mt-2">
                <input
                  type="radio"
                  name="agency"
                  id=""
                  value="Yes"
                  className="scale-150 accent-[#642AF5] mr-3 cursor-pointer"
                />
                <label
                  htmlFor="Yes"
                  className="font-semibold text-[#1D2226] text-[14px]"
                >
                  Yes
                </label>
                <input
                  type="radio"
                  name="agency"
                  id=""
                  value="No"
                  className="scale-150 accent-[#642AF5] mr-3 ml-5 cursor-pointer"
                />
                <label
                  htmlFor="No"
                  className="font-semibold text-[#1D2226] text-[14px]"
                >
                  No
                </label>
              </div>
            </div>
            <Link to={"/account"}>
              <button className="w-full h-11 bg-[#6C25FF] mt-30 text-white flex justify-center items-center font-medium text-[16px] cursor-pointer rounded-md">
                Create Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
