import React from 'react';
import { useProductContext } from '../context/ProductContext';
import ComfortSection from '../components/ComfortSection';
import ProductCard from '../components/ProductCard';

const Accessories = () => {
  const { products } = useProductContext();

  const accessoriesProducts = products.filter(product => product.category === 'accessories');

  if (!products.length) {
    return <p className="text-center text-lg mt-10">Loading accessories...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-2 md:px-4 py-4 md:py-8">
      <div className="text-center mb-6 md:mb-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">LOJA FASHION STORE</h1>
        <h2 className="text-xl md:text-3xl font-semibold text-gray-700">Accessories</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        {accessoriesProducts.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <ComfortSection />
    </div>
  );
};

export default Accessories;
