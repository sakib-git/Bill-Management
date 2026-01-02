import React from 'react';
import laptop from '../assets/laptop.png';
import phone from '../assets/mobile bill.png';
import { IoArrowDown } from "react-icons/io5";
const Banner2 = () => {

  return (
    <div className="bg-gradient-to-r from-[#000545] via-[#224b8a] to-[#0dcaf0] mt-16 lg:mt-18 py-20 ">
      <div className="max-w-[1400px] mx-auto ">
        <div className="flex justify-between items-center gap-10 max-md:flex-col  md:mx-4">
          <div className="flex-1">
            <h1 className="text-white text-[clamp(1.5rem,0.5rem+4vw,4rem)] font-bold mb-2">Manage Your Bills Effortlessly</h1>

            <p className="text-[clamp(1rem,0.5rem+2vw,1.3rem)] text-white">Track, pay, and organize all your bills in one place.</p>
          </div>
          <div className="flex-1 relative max-md:hidden">
            <img src={laptop} alt="" />

            <div className='absolute  top-14 lg:top-22 -left-17 floating'>
              <img className='h-[250px] lg:h-[350px]' src={phone} alt="" />
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <span className='text-white mt-10 bg-[#2ebdb1] p-2 rounded-full hover:bg-white hover:text-[#2ebdb1] floating'>
            <IoArrowDown size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
