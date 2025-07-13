import React from 'react';
import { Link } from 'react-router-dom';
import ComfortSection from '../components/ComfortSection';

const mensProducts = [
  {
    id: 1,
    title: 'White T-shirt',
    description: 'Premium quality product with 5 star rating',
    rating: 5,
    category: 'men',
    image: 'https://tse3.mm.bing.net/th/id/OIP.-J5Zsgt9hQNyg1cMEL-Y8AHaHR?pid=Api&P=0&h=220'
  },
  {
    id: 2,
    title: 'Black T-Shirt',
    description: 'Premium quality product with 5 star rating',
    rating: 5,
    category: 'men',
    image: 'https://tse2.mm.bing.net/th/id/OIP.vAUUyUWJwIWPATfBY-rIiwHaJk?pid=Api&P=0&h=220'
  },
  {
    id: 3,
    title: 'Yellow T-Shirt',
    description: 'Premium quality product with 5 star rating',
    rating: 5,
    category: 'men',
    image: 'https://tse3.mm.bing.net/th/id/OIP.MEiBWJw6_fvA1O52NhfaiwHaIG?pid=Api&P=0&h=220'
  },
  {
    id: 4,
    title: 'Blue Jeans',
    description: 'Premium quality product with 5 star rating',
    rating: 5,
    category: 'men',
    image: 'https://tse4.mm.bing.net/th/id/OIP.6KsKbtO0Sxthjej19eiNPQHaHa?pid=Api&P=0&h=220'
  },
  {
    id: 5,
    title: 'Jeans Pant',
    description: 'Premium quality product with 5 star rating',
    rating: 5,
    category: 'men',
    image: 'https://tse3.mm.bing.net/th/id/OIP.SlyMGK7YcsCNdE78VbbR_wHaFc?pid=Api&P=0&h=220'
  },
  {
    id: 6,
    title: 'Bagy Trouser',
    description: 'Premium quality product with 5 star rating',
    rating: 5,
    category: 'men',
    image: 'https://tse2.mm.bing.net/th/id/OIP.mqe7_X82mwS_Smn6sG1e3wHaHa?pid=Api&P=0&h=220'
  }
];

const Mens = () => {
  return (
    <div className="p-2 md:p-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Men's Collection</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
        {mensProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            state={{ product }}
            key={product.id}
            className="bg-white p-3 md:p-6 rounded-lg shadow-sm md:shadow-md hover:shadow-lg transition-shadow border border-gray-200 md:border-2 md:border-blue-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-32 md:h-48 object-cover rounded mb-2 md:mb-4"
            />
            <h3 className="text-sm md:text-xl font-semibold mb-1 md:mb-2">{product.title}</h3>
            <p className="text-xs md:text-gray-600 md:text-sm mb-1 md:mb-3">{product.description}</p>
            <div className="flex mb-2 md:mb-4">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs md:text-lg ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  ★
                </span>
              ))}
            </div>
            <button className="w-full bg-black text-white py-1 md:py-2 rounded hover:bg-gray-800 transition-colors text-xs md:text-base">
              Add to Cart
            </button>
          </Link>
        ))}
      </div>
      <ComfortSection />
    </div>
  );
};

export default Mens;