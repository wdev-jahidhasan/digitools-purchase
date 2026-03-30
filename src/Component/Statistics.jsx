import React from 'react';

const Statistics = () => {
  return (
    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex justify-around my-10 py-10'>
      <div>
        <h1 className='text-5xl font-black'>50K+</h1>
        <p>Active Users</p>
      </div>

      <div>
        <h1 className='text-5xl font-black'>200+</h1>
        <p>Premium Tools</p>
      </div>

      <div>
        <h1 className='text-5xl font-black'>4.9</h1>
        <p>Rating</p>
      </div>
    </div>
  );
};

export default Statistics;