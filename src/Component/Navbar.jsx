import React from 'react';
import digiTools from '../assets/DigiTools.png';
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (


    <div className="navbar bg-base-100 w-full max-w-7xl mx-auto px-4">

      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a className='font-semibold'>Products</a></li>
            <li><a className='font-semibold'>Features</a></li>
            <li><a className='font-semibold'>Pricing</a></li>
            <li><a className='font-semibold'>Testimonials</a></li>
            <li><a className='font-semibold'>FAQ</a></li>
          </ul>
        </div>

        <img src={digiTools} alt="" className='h-5 md:h-8 w-auto' />

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a className='text-lg font-semibold'>Products</a></li>
          <li><a className='text-lg font-semibold'>Features</a></li>
          <li><a className='text-lg font-semibold'>Pricing</a></li>
          <li><a className='text-lg font-semibold'>Testimonials</a></li>
          <li><a className='text-lg font-semibold'>FAQ</a></li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-2">

        <IoCartOutline className='text-3xl' />
        <button className='btn btn-sm btn-ghost text-sm md:text-lg hidden md:inline-block'>Login</button>
        <button className='btn btn-md bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl'>Get Started</button>
        {/* </div> */}



      </div>
    </div>


    // <div className='flex justify-between items-center w-11/12 md:w-4/5 mx-auto my-5'>

    //     <div>
    //       <img src={digiTools} alt="" />
    //     </div>


    //     <div className='flex justify-between gap-5 font-semibold'>
    //       <p>Products</p>
    //       <p>Features</p>
    //       <p>Pricing</p>
    //       <p>Testimonial</p>
    //       <p>FAQ</p>
    //     </div>


    //     <div className='flex justify-between items-center gap-2 font-semibold'>
    //       <IoCartOutline className='text-2xl' />
    //       <button className='btn btn-ghost'>Login</button>
    //       <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl'>Get Started</button>
    //     </div>
    // </div>
  );
};

export default Navbar;