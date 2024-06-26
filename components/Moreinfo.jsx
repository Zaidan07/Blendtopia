import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
const MoreInfoModal = () => {
  const info=[
    {
      title:'Apa produk yang dijual halal?',
      des:'Tentu saja, kami berani menjamin produk yang kami jual itu halal,juga telah mendapatkan sertifikat halal.'
    },
    {
      title:'Apa harga yang di tawarkan sesuai?',
      des:'Tentu saja, kami mengedepankan kejujuran, dari harga yang di tawarkan dengan yang asli semua sama.'
    },
    {
      title:'Kenapa memilih buah sebagai bahan utama pembuatan produk?',
      des:'Karena menurut kami buah memiliki banyak khasiat didalamnya,dan buah juga mudah di olah.'
    },
    {
      title:'Produk yang dijual apakah menggunakan pemanis buatan?',
      des:'Tidak, setiap produk yang kami jual tidak mengandung pemanis buatan.'
    },
   
  ]
  return (
    <div className="container mx-auto py-20">
            <p className="text-gray-500 text-2xl font-medium uppercase my-3">
          MORE INFO
      </p>
      <p className="text-gray-800 text-4xl font-medium capitalize mb-10">
      Pertanyaan Umum
      </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
      {info.map((inf,i)=>{
        return(
      
    <Disclosure key={i} >
        {({ open }) => (
          <div className='group'>
            <Disclosure.Button className="flex flex-col group-hover:bg-[#524fd5] group-focus:bg-[#524fd5] w-full justify-between rounded-lg lg:rounded-full border border-gray-200 px-8 py-10 text-left text-sm font-medium  focus:outline-none ">
              <div className="flex justify-between items-center w-full">
              <span className='group-hover:text-white  group-focus:text-white'>{inf.title}</span>
              <BsFillPlusCircleFill
                className={`${
                  open ? 'rotate-180 transform' : ''
                }  text-[#524fd5] text-2xl group-hover:text-white  group-focus:text-white `}
              />
              </div>
           
                   <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 group-focus:text-white group-hover:text-white">
              {inf.des}
            </Disclosure.Panel>
            </Disclosure.Button>
       
          </div>
        )}
      </Disclosure>
       
        )
      })}
  
 
    </div>
  </div>
  )
}

export default MoreInfoModal