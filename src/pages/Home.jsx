import React from 'react';
import { useProductContext } from '../context/ProductContext';
import ComfortSection from '../components/ComfortSection';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { featuredProducts } = useProductContext();

  // Show loading state or fallback
  if (!featuredProducts || featuredProducts.length === 0) {
    return (
      <div className="text-center mt-20">
        <p className="text-lg font-medium">Loading featured products...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <section className="bg-gray-50 py-8 md:py-16 text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">Use Luxury</h1>
        <p className="text-sm md:text-lg text-gray-600">
          Join Our Premium Community
        </p>
      </section>

      {/* Top Products */}
      <section className="px-4 md:px-6 py-6 md:py-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
          TOP PRODUCTS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <div className="text-center mt-4 md:mt-6">
          <button className="bg-gradient-to-b from-[#dec7a3] via-white to-[#dec7a3] text-black text-sm md:text-base px-5 py-2 md:px-7 md:py-3 rounded-full shadow-md hover:scale-105 transition-transform tracking-wide font-semibold">
            Show More &gt;&gt;
          </button>
        </div>
      </section>

      <ComfortSection />
    </div>
  );
};

export default Home;
