import React from 'react';
import emptyCart from "../assets/empty-cart.webp"

const Cart = ({ carts, setCarts }) => {
  
  const totalPrice = carts.reduce((sum, cart) => sum + cart.price, 0)

  const handleCheckout = () =>{
    setCarts([])
    alert('Done')
  }

  return (
    <div className='max-w-7xl mx-auto my-16 px-2'>
      <h1 className='text-5xl font-bold text-center'>Your Cart</h1>


      {
        carts.length === 0 
        ? 
        <div className='bg-red-100 my-5 py-12 flex flex-col items-center justify-center rounded-2xl'>
          <img src={emptyCart} alt="" className='w-56 h-56' />
          <p className='text-5xl font-bold text-center text-red-800 my-12'>Cart is Empty</p>
        </div>
        : <>
      {
        carts.map(cart =>
          <div key={cart.id} className='my-6'>

            <div className='flex justify-between items-center bg-gray-100  px-3 md:px-8 rounded-xl shadow-md'>
              <div className='flex justify-between items-center gap-3 '>
                <p className='flex items-center justify-center text-2xl w-12 h-12 border border-gray-400 bg-white rounded-full my-5'>{cart.icon}</p>

                <div>
                  <p className='text-lg font-semibold'>{cart.name}</p>
                  <p className='text-gray-500'>$ {cart.price}</p>
                </div>
              </div>

              <div>
                <p className='text-red-500 font-semibold'>Remove</p>
              </div>
            </div>


          </div>
        )
      }

      <div className='flex justify-between my-10'>
        <p className='text-gray-500'>Total:</p>
        <p className='text-2xl font-semibold'>$ {totalPrice}</p>
      </div>

      <button onClick={handleCheckout} className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl w-full my-3 py-6 text-lg'>Proceed to Checkout</button>
        
        </>

      }


      
    </div>

  );
};

export default Cart;