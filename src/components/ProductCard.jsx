import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  // Function to generate a placeholder image based on product title
  const getPlaceholderImage = (title) => {
    // You can customize these placeholder images based on your needs
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
    
    // Default placeholder
    return `https://via.placeholder.com/300x300.png?text=${encodeURIComponent(title)}`;
  };

  return (
    <div className="border border-red-200 rounded-lg p-4 w-64 m-4 hover:shadow-md transition-shadow flex flex-col">
      {/* Product Image Section - Always show an image */}
      <div className="relative h-48 mb-4 rounded overflow-hidden bg-gray-100 flex items-center justify-center">
        <img 
          src={product.image || getPlaceholderImage(product.title)} 
          alt={product.title} 
          className="w-full h-full object-contain"
        />
        {/* Featured badge */}
        {product.featured && (
          <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-xs font-medium">
            Featured
          </div>
        )}
      </div>
      
      {/* Product Info Section */}
      <div className="flex-grow space-y-2 flex flex-col">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-gray-600 text-sm">{product.description}</p>
        
        {/* Rating */}
        <div className="flex text-yellow-400">
          {Array.from({ length: product.rating }).map((_, i) => (
            <span key={i}>★</span>
          ))}
          {Array.from({ length: 5 - product.rating }).map((_, i) => (
            <span key={i}>☆</span>
          ))}
        </div>
        
        {/* Add to Cart Button */}
        <button className="mt-auto w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;