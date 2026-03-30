import React from 'react';
import user from "../assets/user.png";
import box from "../assets/package.png";
import rocket from "../assets/rocket.png";

const Steps = () => {
  return (

    <div className='bg-gray-50 py-5'>

    <div className='text-center py-10'>
      <h1 className='text-3xl md:text-5xl font-bold'>Get Started in 3 Steps</h1>
      <p className='text-gray-500 my-4'>Start using premium digital tools in minutes, not hours.</p>
    </div>
    
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl mx-auto my-5'>
      <div className='mx-3 px-3 rounded-xl py-5 flex flex-col items-center shadow-xl bg-white relative'>
        <div className="badge badge-primary rounded-full absolute right-5 top-3">01</div>
        <img src={user} alt="" className='mt-10 mb-6 bg-purple-100 rounded-full p-5'/>
        <h1 className='text-2xl font-bold my-5'>Create Account</h1>
        <p className='text-center mb-10 text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
      </div>

      <div className='mx-3 px-3 rounded-xl py-5 flex flex-col items-center shadow-xl bg-white relative'>
        <div className="badge badge-primary rounded-full absolute right-5 top-3">02</div>
        <img src={box} alt="" className='mt-10 mb-6 bg-purple-100 rounded-full p-5'/>
        <h1 className='text-2xl font-bold my-5'>Choose Products</h1>
        <p className='text-center mb-10 text-gray-500'>Browse our catalog and select the tools that fit your needs.</p>
      </div>

      <div className='mx-3 px-3 rounded-xl py-5 flex flex-col items-center shadow-xl bg-white relative'>
        <div className="badge badge-primary rounded-full absolute right-5 top-3">03</div>
        <img src={rocket} alt="" className='mt-10 mb-6 bg-purple-100 rounded-full p-5'/>
        <h1 className='text-2xl font-bold my-5'>Start Creating</h1>
        <p className='text-center mb-10 text-gray-500'>Download and start using your premium tools immediately.</p>
      </div>
      
    </div>
    
    </div>
    
  );
};

export default Steps;