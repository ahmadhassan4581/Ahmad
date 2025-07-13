import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const getPlaceholderImage = (title) => {
    const placeholders = {
      'headphones': 'https://tse4.mm.bing.net/th/id/OIP.VypT1Z6DqmN-vlki7ypL9wHaHq?pid=Api&P=0&h=220',
      'earbuds': 'https://tse3.mm.bing.net/th/id/OIP._13NUku7qRPWc-77Trhm-QHaHa?pid=Api&P=0&h=220',
      'watch': 'https://tse4.mm.bing.net/th/id/OIP.Jnf7NqDnwly50SGkQfokswHaIV?pid=Api&P=0&h=220',
      't-shirt': 'https://tse3.mm.bing.net/th/id/OIP.-J5Zsgt9hQNyg1cMEL-Y8AHaHR?pid=Api&P=0&h=220',
    };

    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('headphone')) return placeholders.headphones;
    if (lowerTitle.includes('bud')) return placeholders.earbuds;
    if (lowerTitle.includes('watch')) return placeholders.watch;
    if (lowerTitle.includes('shirt')) return placeholders['t-shirt'];
    return `https://via.placeholder.com/300x300.png?text=${encodeURIComponent(title)}`;
  };

  return (
    <div className="border border-gray-200 rounded-lg p-2 w-full hover:shadow-md transition-shadow flex flex-col">
      <div className="relative h-32 rounded overflow-hidden bg-gray-100 flex items-center justify-center">
        <img 
          src={product.image || getPlaceholderImage(product.title)} 
          alt={product.title} 
          className="w-full h-full object-contain"
        />
        {product.featured && (
          <div className="absolute top-1 left-1 bg-white px-1 py-0.5 rounded text-xs font-medium">
            Featured
          </div>
        )}
      </div>
      
      <div className="flex-grow space-y-1 mt-2 flex flex-col">
        <h3 className="font-semibold text-sm">{product.title}</h3>
        <p className="text-gray-600 text-xs">{product.description}</p>
        
        <div className="flex text-yellow-400 text-xs">
          {Array.from({ length: product.rating }).map((_, i) => (
            <span key={i}>★</span>
          ))}
          {Array.from({ length: 5 - product.rating }).map((_, i) => (
            <span key={i}>☆</span>
          ))}
        </div>
        
        <button className="mt-2 w-full bg-black text-white py-1 rounded hover:bg-gray-800 transition-colors text-xs">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;