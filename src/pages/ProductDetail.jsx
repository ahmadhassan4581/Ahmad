import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext'; // 👈 import

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  const { addToCart } = useProductContext(); // 👈 use context
  const [mainImage, setMainImage] = useState(product?.images?.[0]);
  const [selectedColor, setSelectedColor] = useState('red');
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="p-4">Product not found.</div>;

  const handleAddToCart = () => {
    addToCart(product, Number(quantity), selectedColor);
  };

  return (
    <div className="max-w-4xl mx-auto px-2 md:px-4 py-2 md:py-4">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Image Section */}
        <div className="flex-1">
          <img src={mainImage} alt={product.title} className="w-full h-auto rounded-lg" />
          <div className="flex gap-2 mt-2 overflow-x-auto">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumbnail-${i}`}
                onClick={() => setMainImage(img)}
                className={`w-16 h-16 md:w-20 md:h-20 object-cover rounded border cursor-pointer ${
                  mainImage === img ? 'border-black' : 'border-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="flex-1 mt-2 md:mt-0">
          <h2 className="text-xl md:text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-2 text-xs md:text-sm">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-base md:text-lg ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
            ))}
            <span className="ml-2 text-xs text-gray-500">5 star rating</span>
          </div>

          {/* Color Selection */}
          <div className="mb-2">
            <span className="font-semibold text-sm">Colors:</span>
            <div className="flex gap-2 mt-1">
              {['red', 'white', 'blue', 'black'].map((color) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-5 h-5 md:w-6 md:h-6 border rounded-full cursor-pointer ${
                    selectedColor === color ? 'ring-2 ring-black' : ''
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-4 text-sm">
            <span className="font-semibold">Quantity:</span>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-12 ml-2 p-1 border rounded text-sm"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-2 md:gap-4 mb-4">
            <button onClick={handleAddToCart} className="bg-black text-white px-3 py-1 md:px-4 md:py-2 rounded hover:bg-gray-800 text-sm">
              Add to Cart
            </button>
            <button className="border border-black text-black px-3 py-1 md:px-4 md:py-2 rounded hover:bg-gray-100 text-sm">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
