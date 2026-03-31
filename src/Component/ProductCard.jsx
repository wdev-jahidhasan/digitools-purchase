import React from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({product, carts, setCarts}) => {

  const handleBuyNow = () => {

    const isFound = carts.find(item => item.id === product.id)

    if(isFound){
      toast.warning('Already added')
      return
    }

    toast.success('Successfully added to cart')
    setCarts([...carts, product])
  }

  return (
    <div>
    <div className='relative border-2 border-gray-200 shadow-lg rounded-xl px-8 m-2'>
              <span className={`absolute top-3 right-2 badge text-white font-bold ${product.tag === "Popular"
                  ? "badge-primary"
                  : product.tag === "Best Seller"
                    ? "badge-warning"
                    : product.tag === "New"
                      ? "badge-success"
                      : ""
                }`}>{product.tag}</span>
              <p className='flex items-center justify-center text-5xl w-20 h-20 border border-gray-300 rounded-full my-5'>{product.icon}</p>
              <h1 className='text-2xl font-bold my-5'>{product.name}</h1>
              <p className='text-gray-600'>{product.description}</p>
              <p className='my-5'><span className='text-3xl font-semibold'>${product.price}</span><span className='text-gray-600'>/{product.period}</span></p>
              <div>
                {product.features.map((feature, index) =>
                  <div key={index}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className='text-gray-600'>{feature}</span>
                  </div>
                )}
              </div>
              <button onClick={()=> handleBuyNow()} className='my-8 py-6 btn w-[90%] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl'>Buy Now</button>
            </div>
            </div>
  );
};

export default ProductCard;