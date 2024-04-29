import React from "react";

const Teacher = () => {
  return (
    <div className="container mx-auto py-20" id="Member">
      <p className="text-base lg:text-xl font-medium text-gray-500 uppercase">
       Inilah Kami
      </p>
      <p className="text-3xl lg:text-5xl font-semibold text-gray-500  mt-3">
      Meet our Member
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-10 lg:py-20">
        <div className="flex flex-col gap-5 ">
          <img src="/assets/anggun1.jpg" alt="v1" className="rounded-3xl"/>
          <p className="text-2xl font-semibold">Anggun</p>
          <div className="flex items-center gap-2">
           
            <p className="text-gray-500">
            Desain Grafis
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/fikris.jpg" alt="v1" className="rounded-3xl"/>
          <p className="text-2xl font-semibold">Fikri</p>
          <div className="flex items-center gap-2">
            
            <p className="text-gray-500">
            Desain Grafis
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/zidan1.jpg" alt=""  className="rounded-3xl"/>
          <p className="text-2xl font-semibold">Zaidan</p>
          <div className="flex items-center gap-2">
            
            <p className="text-gray-500">
            Web Programming
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/salsa1.jpg" alt="v1" className="rounded-3xl"/>
          <p className="text-2xl font-semibold">Salsa</p>
          <div className="flex items-center gap-2">
            
            <p className="text-gray-500">
            Illustration
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/sofyan1.jpg" alt="v1" className="rounded-3xl"/>
          <p className="text-2xl font-semibold">Sofyan</p>
          <div className="flex items-center gap-2">
            
            <p className="text-gray-500">
            Video Grafis
          </p>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Teacher;
