import React from "react";

const About = () => {
  return (
    <div className="container mx-auto ">
      <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
        About Us
      </p>
      <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
        Kenalan Dulu Yuk!
      </p>
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
        <img src="/assets/lambat.gif" alt="" />
        <div className="flex flex-col gap-5 items-start">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Blendtopia</p>
         
          <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl">
            Blendtopia adalah brand smoothie lokal yang menjual smoothie dengan <br /> berbagai varian rasa
            yang rasanya dijamin bikin nagih, <br />  kami awalnya hanya menjual produk kami kepada tema/kenalan kami <br />
            tapi setelah melihat bahwa produk kami berhasil, <br/>kami akhirnya memutuskan untuk mendirikan tempat usaha kami sendiri
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
