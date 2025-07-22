import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/products');
        setProducts(data);
        const featured = data.filter((item) => item.isFeatured || item.rating >= 4);
        setFeaturedProducts(featured);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product, quantity = 1, color = '') => {
    setCart(prev => {
      const existingItem = prev.find(p => p.id === product.id && p.color === color);
      if (existingItem) {
        return prev.map(p =>
          p.id === product.id && p.color === color
            ? { ...p, quantity: p.quantity + quantity }
            : p
        );
      } else {
        return [...prev, { ...product, quantity, color }];
      }
    });
  };

  const removeFromCart = (id, color) => {
    setCart(prev => prev.filter(p => !(p.id === id && p.color === color)));
  };

  return (
    <ProductContext.Provider value={{ products, featuredProducts, cart, addToCart, removeFromCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
