import React, { use } from 'react';
import ProductCard from './ProductCard';

const Products = ({ productPromise, carts, setCarts }) => {
  const products = use(productPromise);

  return (

    <div className='py-10'>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-7xl mx-auto py-8'>

        {products.map(product =>
          <ProductCard
            key={product.id}
            product={product}
            carts={carts}
            setCarts={setCarts} >
          </ProductCard>
        )}




      </div>
    </div>

  );
};

export default Products;