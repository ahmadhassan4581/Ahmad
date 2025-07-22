// components/Cart.jsx
import React from 'react';
import { useProductContext } from '../context/ProductContext';

const Cart = () => {
  const { cart, removeFromCart } = useProductContext();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) return <div className="p-4">Your cart is empty.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="flex items-center justify-between border-b py-2">
          <div>
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-500">Color: {item.color} | Qty: {item.quantity}</p>
          </div>
          <div>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
            <button
              onClick={() => removeFromCart(item.id, item.color)}
              className="text-xs text-red-500 hover:underline mt-1"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4 text-right font-semibold text-lg">Total: ${total.toFixed(2)}</div>
    </div>
  );
};

export default Cart;
