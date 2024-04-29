import React from 'react'
import Link from 'next/link'


const Navbar = () => {


  return (
    <div className=''>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
            <img src="/assets/logos.png" alt="logo" className='w-36'/>
            <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
            <a href="#Hero" className="text-black hover:text-gray-400">
            Home
            </a>
            <a href="#Values" className="text-black hover:text-gray-400">
              Composition
            </a>
            <a href="#Member" className="text-black hover:text-gray-400">
              Member
            </a>
            <a href="#Faq" className="text-black hover:text-gray-400">
              FAQ
            </a>
            <a href="#Contact" className="text-black hover:text-gray-400">
              Contact Us
            </a>
            <a href="#More" className="text-black hover:text-gray-400">
              More
            </a>

            </div>
            <button className='btn bg-transparent border-none hover:bg-transparent hover:text-white capitalize rounded-full'>
                
            </button>
        </div>
    </div>
  )
}

export default Navbar