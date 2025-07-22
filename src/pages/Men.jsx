import React from 'react';
import { useProductContext } from '../context/ProductContext';
import ComfortSection from '../components/ComfortSection';
import ProductCard from '../components/ProductCard';

const Mens = () => {
  const { products } = useProductContext();

  const mensProducts = products.filter((product) => product.category === 'men');

  if (!products.length) {
    return <p className="text-center text-lg mt-10">Loading products...</p>;
  }

  return (
    <div className="p-2 md:p-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Men's Collection</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        {mensProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <ComfortSection />
    </div>
  );
};

export default Mens;
