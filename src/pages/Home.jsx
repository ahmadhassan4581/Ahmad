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
      category: 'accessories',
      image: 'https://tse4.mm.bing.net/th/id/OIP.RZjRvaO9IfDAwpD20I7e5wHaHa?pid=Api&P=0&h=220'
    },
    {
      id: 2,
      title: 'Air Buds',
      description: 'Premium quality product',
      rating: 5,
      category: 'accessories',
      image: 'https://tse3.mm.bing.net/th/id/OIP._13NUku7qRPWc-77Trhm-QHaHa?pid=Api&P=0&h=220'
    },
    {
      id: 3,
      title: 'Smart Watch',
      description: 'Premium quality product',
      rating: 5,
      category: 'accessories',
      image: 'https://tse4.mm.bing.net/th/id/OIP.Jnf7NqDnwly50SGkQfokswHaIV?pid=Api&P=0&h=220'
    },
    {
      id: 4,
      title: 'White T-shirt',
      description: 'Premium quality product',
      rating: 3,
      category: 'men',
      image: 'https://tse3.mm.bing.net/th/id/OIP.-J5Zsgt9hQNyg1cMEL-Y8AHaHR?pid=Api&P=0&h=220'
    },
    {
      id: 5,
      title: 'Premium Headphones',
      description: 'Premium quality product',
      rating: 5,
      category: 'accessories',
      image: 'https://tse4.mm.bing.net/th/id/OIP.RZjRvaO9IfDAwpD20I7e5wHaHa?pid=Api&P=0&h=220'
    },
    {
      id: 6,
      title: 'Air Buds',
      description: 'Premium quality product',
      rating: 5,
      category: 'accessories',
      image: 'https://tse3.mm.bing.net/th/id/OIP._13NUku7qRPWc-77Trhm-QHaHa?pid=Api&P=0&h=220'
    },
    {
      id: 7,
      title: 'Smart Watch',
      description: 'Premium quality product',
      rating: 5,
      category: 'accessories',
      image: 'https://tse4.mm.bing.net/th/id/OIP.Jnf7NqDnwly50SGkQfokswHaIV?pid=Api&P=0&h=220'
    },
    {
      id: 8,
      title: 'White T-shirt',
      description: 'Premium quality product',
      rating: 3,
      category: 'men',
      image: 'https://tse3.mm.bing.net/th/id/OIP.-J5Zsgt9hQNyg1cMEL-Y8AHaHR?pid=Api&P=0&h=220'
    },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <section className="bg-gray-50 py-8 md:py-16 text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">Use Luxury</h1>
        <p className="text-sm md:text-lg text-gray-600">Join Our Premium Community</p>
      </section>
      
      {/* Featured Products Section */}
      <section className="px-4 md:px-6 py-6 md:py-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">TOP PRODUCTS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg p-2 md:p-4 hover:shadow-md transition-shadow">
              <div className="relative h-32 md:h-48 mb-2 md:mb-4 rounded overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-sm md:text-base font-semibold mb-1">{product.title}</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-2">{product.description}</p>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xs md:text-sm ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <button className="w-full bg-black text-white py-1 md:py-2 rounded hover:bg-gray-800 transition-colors text-xs md:text-sm">
                Add to Cart
              </button>
            </div>
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