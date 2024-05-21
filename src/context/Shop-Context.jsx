
import { PRODUCTS } from "@/app/Products";
import React, {  createContext, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

 export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  };

  const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  };

  const conTextValue = {cartItems, addToCart, removeFromCart}

  return <ShopContext.Provider value={conTextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContext;
