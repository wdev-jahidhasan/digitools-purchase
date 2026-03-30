import React from 'react';
import bannerImg from '../assets/banner.png';
import circle from '../assets/Group 5.png';
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="hero w-4/5 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        
          <img
          src={bannerImg}
          className="rounded-lg shadow-xl"
        />
        
        
        <div className='pr-20'>
          <button className='text-[#4F39F6] bg-gray-100 rounded-3xl p-3 py-1 mb-4 flex items-center gap-2'><img className='h-4 w-4' src={circle} alt="" /> New: AI-Powered Tools Available</button>
          <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
          <p className="py-6 text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>
          <div className='flex gap-4'>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl">Explore Products</button>
          <button className='btn btn-outline btn-primary rounded-3xl'><CiPlay1 /> Watch Videos</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;