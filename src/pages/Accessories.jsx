// src/pages/Accessories.jsx
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
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">LOJA FASHION STORE</h1>
        <h2 className="text-3xl font-semibold text-gray-700">Accessories</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {accessoriesProducts.map(product => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            state={{ product }}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="relative h-48 mb-4 rounded overflow-hidden bg-gray-100 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-grow space-y-2 flex flex-col">
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>

              <div className="flex text-yellow-400">
                {[...Array(product.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {[...Array(5 - product.rating)].map((_, i) => (
                  <span key={i}>☆</span>
                ))}
              </div>

              <button
                className="mt-auto w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors"
                onClick={(e) => {
                  e.preventDefault(); // prevent navigating when clicking button
                  console.log('Added to cart:', product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* Comfort Section */}
      <ComfortSection />
    </div>
  );
};

export default Accessories;
