import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Appcontext = createContext();

export const Context = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setcartItems] = useState([]);
  const [cartCounts, setcartCounts] = useState(0);
  const [cartSubTotal, setcartSubTotal] = useState(0);
  const Location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Location]);
  useEffect(() => {
    let count = 0;
    cartItems.map((cartItem) => {
      count += cartItem.attributes.quantity;
      setcartCounts(count);
    });
    let subTotal = 0;
    cartItems.map((item) => {
      return (subTotal += item.attributes.price * item.attributes.quantity);
    });

    setcartSubTotal(subTotal);
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    let item = [...cartItems];
    let index = item.findIndex((i) => i.id === product.id);
    if (index !== -1) {
      item[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      item = [...item, product];
    }
    setcartItems(item);
  };

  const handleRemoveFromCart = (product) => {
    let item = [...cartItems];
    item = item.filter((i) => i.id !== product.id);
    setcartItems(item);
  };

  const handleCartProductQuantity = (type, product) => {
    let item = [...cartItems];
    let index = item.findIndex((i) => i.id === product.id);
    if (type === "inc") {
      item[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (item[index].attributes.quantity === 1) return;
      item[index].attributes.quantity -= 1;
    }
    setcartItems(item);
  };
  return (
    <Appcontext.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setcartItems,
        cartCounts,
        setcartCounts,
        cartSubTotal,
        setcartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};
export const Appstore = () => {
  return useContext(Appcontext);
};
