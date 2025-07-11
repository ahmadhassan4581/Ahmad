import React from 'react';
import ProductList from '../components/ProductList';
import ComfortSection from '../components/ComfortSection';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      title: 'Premium Headphones',
      description: 'Premium quality product',
      rating: 5,
      category: 'accessories'
    },
    {
      id: 2,
      title: 'Air Buds',
      description: 'Premium quality product',
      rating: 5,
      category: 'accessories'
    },
    {
      id: 3,
      title: 'Smart Watch',
      description: 'Premium quality product',
      rating: 5,
      category: 'accessories'
    },
    {
      id: 4,
      title: 'White T-shirt',
      description: 'Premium quality product',
      rating: 3,
      category: 'men'
    }
  ];

  return (
    <div className="space-y-8">
      <section className="bg-gray-50 py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Use Luxury</h1>
        <p className="text-lg text-gray-600">Join Our Premium Community</p>
      </section>
      
      <section className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">TOP PRODUCTS</h2>
        <ProductList products={featuredProducts} />
        <div className="text-center mt-6">
          <button
  className="bg-gradient-to-b from-[#dec7a3] via-white to-[#dec7a3] text-black text-base px-7 py-3 rounded-full shadow-md hover:scale-105 transition-transform tracking-wide font-semibold font-[Poppins]"
>
  Show More &gt;&gt;
</button>

        </div>
      </section>
      
      <ComfortSection />
    </div>
  );
};

export default Home;