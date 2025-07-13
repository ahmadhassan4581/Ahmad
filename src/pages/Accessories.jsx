import React from 'react';
import { Link } from 'react-router-dom';
import ComfortSection from '../components/ComfortSection';

const accessoriesProducts = [
  {
    id: 1,
    title: 'Premium Headphone',
    description: 'Premium quality product with 5 star rating',
    rating: 5,
    category: 'accessories',
    image: 'https://tse4.mm.bing.net/th/id/OIP.RZjRvaO9IfDAwpD20I7e5wHaHa?pid=Api&P=0&h=220'
  },
  {
    id: 2,
    title: 'Black Cap',
    description: 'Premium quality product with 5 star rating',
    rating: 5,
    category: 'accessories',
    image: 'https://tse3.mm.bing.net/th/id/OIP._13NUku7qRPWc-77Trhm-QHaHa?pid=Api&P=0&h=220'
  },
  {
    id: 3,
    title: 'Stylish Watch',
    description: 'Premium quality product with 5 star rating',
    rating: 5,
    category: 'accessories',
    image: 'https://tse4.mm.bing.net/th/id/OIP.Jnf7NqDnwly50SGkQfokswHaIV?pid=Api&P=0&h=220'
  },
  {
    id: 4,
    title: 'Leather Belt',
    description: 'Premium quality product with 5 star rating',
    rating: 5,
    category: 'accessories',
    image: 'https://tse2.mm.bing.net/th/id/OIP.1YDhQSAQ4MoBE1FqvrMlFAHaHO?pid=Api&P=0&h=220'
  },
  {
    id: 5,
    title: 'Smart Glasses',
    description: 'Premium quality product with 5 star rating',
    rating: 5,
    category: 'accessories',
    image: 'https://tse2.mm.bing.net/th/id/OIP.jpDOU7Q7GAupzUeHvle5YgHaFB?pid=Api&P=0&h=220'
  },
  {
    id: 6,
    title: 'Crossbody Bag',
    description: 'Premium quality product with 5 star rating',
    rating: 5,
    category: 'accessories',
    image: 'https://tse4.mm.bing.net/th/id/OIP.iaxRVqnrpfmg3mElIy7ahgHaHa?pid=Api&P=0&h=220'
  }
];

const Accessories = () => {
  return (
    <div className="max-w-6xl mx-auto px-2 md:px-4 py-4 md:py-8">
      <div className="text-center mb-6 md:mb-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">LOJA FASHION STORE</h1>
        <h2 className="text-xl md:text-3xl font-semibold text-gray-700">Accessories</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        {accessoriesProducts.map(product => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            state={{ product }}
            className="border border-gray-200 rounded-lg p-2 md:p-4 hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="relative h-32 md:h-48 mb-2 md:mb-4 rounded overflow-hidden bg-gray-100 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-grow space-y-1 md:space-y-2 flex flex-col">
              <h3 className="font-semibold text-sm md:text-lg">{product.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm">{product.description}</p>

              <div className="flex text-yellow-400 text-xs md:text-base">
                {[...Array(product.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {[...Array(5 - product.rating)].map((_, i) => (
                  <span key={i}>☆</span>
                ))}
              </div>

              <button
                className="mt-auto w-full bg-black text-white py-1 md:py-2 rounded hover:bg-gray-800 transition-colors text-xs md:text-base"
                onClick={(e) => e.preventDefault()}
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>

      <ComfortSection />
    </div>
  );
};

export default Accessories;