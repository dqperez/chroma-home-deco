// AppProvider.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  // add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.product_id !== productId));
  };

  // add a product to favorites
  const addToFavorites = (product) => {
    // Check if the product is already in favorites
    if (!favoriteItems.find(item => item.product_id === product.product_id)) {
      setFavoriteItems((prevItems) => [...prevItems, product]);
    }
  };

  // remove a product from favorites
  const removeFromFavorites = (productId) => {
    setFavoriteItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== productId)
    );
  };
  
  // clear the cart
  const clearCart = () => {
    setCartItems([]);
  };


  // Context value
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    favoriteItems,
    addToFavorites,
    removeFromFavorites,
    clearCart
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
