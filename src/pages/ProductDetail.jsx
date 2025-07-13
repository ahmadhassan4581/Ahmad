import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) return <div className="p-4">Product not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-2 md:px-4 py-2 md:py-4">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto rounded-lg"
          />
          <div className="flex gap-2 mt-2 overflow-x-auto">
            {[...Array(3)].map((_, i) => (
              <img
                key={i}
                src={product.image}
                alt={`thumbnail-${i}`}
                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded border"
              />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 mt-2 md:mt-0">
          <h2 className="text-xl md:text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-2 text-xs md:text-sm">{product.description}</p>
          
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-base md:text-lg ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
            <span className="ml-2 text-xs text-gray-500">5 star rating</span>
          </div>

          <div className="mb-2">
            <span className="font-semibold text-sm">Colors:</span>
            <div className="flex gap-2 mt-1">
              {['white', 'black', 'pink', 'blue'].map(color => (
                <div 
                  key={color}
                  className={`w-4 h-4 md:w-5 md:h-5 bg-${color}-500 border rounded-full`}
                />
              ))}
            </div>
          </div>

          <div className="mb-2 text-sm">
            <span className="font-semibold">Stock:</span> Available
          </div>

          <div className="mb-4 text-sm">
            <span className="font-semibold">Quantity:</span>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-12 ml-2 p-1 border rounded text-sm"
            />
          </div>

          <div className="flex gap-2 md:gap-4 mb-4">
            <button className="bg-black text-white px-3 py-1 md:px-4 md:py-2 rounded hover:bg-gray-800 text-sm">
              Add to Cart
            </button>
            <button className="border border-black text-black px-3 py-1 md:px-4 md:py-2 rounded hover:bg-gray-100 text-sm">
              Shop Now
            </button>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-1">Reviews</h3>
            <div className="bg-pink-100 p-2 rounded mb-1 text-xs">
              <strong>Maryam</strong>
              <p>Excellent Product. I am Happy with the delivery from Loja.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;