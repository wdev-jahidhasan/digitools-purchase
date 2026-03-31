import React from 'react';
import bannerImg from '../assets/banner.png';
import circle from '../assets/Group 5.png';
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div>
      <div className="hero-content flex flex-col lg:flex-row-reverse w-full mx-auto gap-6">
        <img src={bannerImg} />
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <button className='text-[#4F39F6] bg-gray-100 rounded-3xl px-3 py-1 text-sm md:text-base mb-4 flex items-center gap-2'><img className='h-4 w-4' src={circle} alt="" /> New: AI-Powered Tools Available</button>
          <h1 className="text-3xl md:text-5xl font-bold">Supercharge Your Digital Workflow</h1>
          <p className="py-6 text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>
          <div className='flex flex-col gap-4 sm:flex-row'>
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">Explore Products</button>
            <button className='btn btn-outline btn-primary rounded-3xl'><CiPlay1 /> Watch Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;