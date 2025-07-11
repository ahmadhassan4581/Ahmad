// src/pages/ProductDetail.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto rounded-lg"
          />
          <div className="flex gap-2 mt-2">
            {[...Array(3)].map((_, i) => (
              <img
                key={i}
                src={product.image}
                alt={`thumbnail-${i}`}
                className="w-20 h-20 object-cover rounded border"
              />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-xl ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
            <span className="ml-2 text-sm text-gray-500">5 star rating</span>
          </div>

          <div className="mb-4">
            <span className="font-semibold">Colors:</span>
            <div className="flex gap-2 mt-1">
              <div className="w-5 h-5 bg-white border rounded-full"></div>
              <div className="w-5 h-5 bg-black border rounded-full"></div>
              <div className="w-5 h-5 bg-pink-500 border rounded-full"></div>
              <div className="w-5 h-5 bg-blue-500 border rounded-full"></div>
            </div>
          </div>

          <div className="mb-4">
            <span className="font-semibold">Stock:</span> Available
          </div>

          <div className="mb-4">
            <span className="font-semibold">Quantity:</span>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 ml-2 p-1 border rounded"
            />
          </div>

          <div className="flex gap-4 mb-6">
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Add to Cart
            </button>
            <button className="border border-black text-black px-6 py-2 rounded hover:bg-gray-100">
              Shop Now
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Reviews</h3>
            <div className="bg-pink-100 p-4 rounded mb-2">
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
