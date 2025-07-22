import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product._id}`, { state: { product } });
  };

  return (
    <div
      onClick={handleClick}
      className="border border-gray-200 rounded-lg p-2 md:p-4 hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="relative h-32 md:h-48 mb-2 md:mb-4 rounded overflow-hidden bg-gray-100">
        <img
          src={product.images?.[0]}
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
  );
};

export default ProductCard;
