import React from "react";

const Values = () => {
  return (
    <div className="container mx-auto py-20" id="Values">
      <p className="text-base lg:text-xl font-medium text-gray-500 text-center">
        WHY CHOOSE US
      </p>
      <p className=" text-3xl lg:text-5xl font-semibold text-gray-500 text-center mt-3">
        Our Values
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v33.svg" alt="v1" className="w-80 h-80"/>
          <p className="text-2xl font-semibold">Harga Murah</p>
          <p className="text-gray-500 text-center">
            Harga produk kami terjangkau. <br /> Anda seorang pelajar? <br /> tidak masalah
            kami memiliki harga yang ramah.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v22.svg" alt="v1" className="w-80 h-80" />
          <p className="text-2xl font-semibold">Punya Rasa Bervariasi</p>
          <p className="text-gray-500 text-center">
            Bosan dengan rasa yang itu-itu aja? <br /> kami menyediakan berbagai macam rasa <br /> yang 
            beragam.
          </p>
        </div> <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v11.svg" alt="v1" className="w-80 h-80"/>
          <p className="text-2xl font-semibold">Bahan Sehat</p>
          <p className="text-gray-500 text-center">
            Bahan yang kami gunakan punya <br /> kondisi yang baik dan <br /> di jamin
            sehat, tanpa menggunakan pengawet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
