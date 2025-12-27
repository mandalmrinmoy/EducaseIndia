import React from "react";
import image from "../src/assets/picture.png";
import camera from "../src/assets/camera.png";

const Welcome = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[375px] h-screen flex flex-col justify-start items-start bg-[#F7F8F9] gap-8 border-2 border-[#F7F8F9]">
        <div className="w-full h-17 bg-white px-4 flex justify-start items-center">
          <h1 className="text-[18px] text-[#1D2226]">Account Settings</h1>
        </div>
        {/* Profile Details */}
        <div className="flex">
          <div className="relative px-4">
            <img src={image} alt="" className="w-19 h-19" />
            <img
              src={camera}
              alt=""
              className="w-5 h-5 absolute top-13 left-18 cursor-pointer"
            />
          </div>
          <div>
            <h3 className="text-[15px] font-medium text-[#1D2226]">
              Marry Doe
            </h3>
            <p className="text-[14px] text-[#1D2226]">Marry@Gmail.Com</p>
          </div>
        </div>
        <div className="">
          <p className="text-[14px] text-[#1D2226] px-4">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
          <div className="border-b border-dashed border-[#CBCBCB] mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
