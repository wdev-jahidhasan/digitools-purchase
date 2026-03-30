import React from 'react';

const Statistics = () => {
  return (
    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex justify-around my-10 py-3 md:py-10 w-full mx-auto'>
      <div>
        <h1 className='text-2xl md:text-5xl font-extrabold'>50K+</h1>
        <p>Active Users</p>
      </div>

      <div>
        <h1 className='text-2xl md:text-5xl font-extrabold'>200+</h1>
        <p>Premium Tools</p>
      </div>

      <div>
        <h1 className='text-2xl md:text-5xl font-extrabold'>4.9</h1>
        <p>Rating</p>
      </div>
    </div>
  );
};

export default Statistics;