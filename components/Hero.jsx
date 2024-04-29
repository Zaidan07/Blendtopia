import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="container mx-auto my-10 " id="Hero">
      <div className="bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-3xl">
        <Navbar />
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
              Nikmati Produk kami <br className="lg:flex hidden"/> berbagai rasa <br className="lg:flex hidden" /> berbagi cerita
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
              Lepaskan stres dan lelahmu, datang kemari <br  className="lg:flex hidden"/> bersama keluarga, teman, atau pasangan. 
            </p>
            <button className="btn btn-sm lg:btn-lg bg-[#524fd5] text-white rounded-full border-none w-36 lg:w-44 capitalize">Lets Buy</button>
          </div>
          <img src="/assets/one.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
