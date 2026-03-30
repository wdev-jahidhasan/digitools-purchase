import React from 'react';

const Products = () => {
  return (
    <div className='py-10'>
      <div className='text-center'>
        <h1 className='text-3xl md:text-5xl font-bold'>Premium Digital Tools</h1>
        <p className='text-gray-500 my-4'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
      </div>

      <div className='text-center'>
        <button className='btn'>Products</button>
        <button className='btn'>Cart (02)</button>
      </div>

      <div className='bg-yellow-200 font-bold text-3xl text-center py-5'>
        Products
      </div>
    </div>
  );
};

export default Products;