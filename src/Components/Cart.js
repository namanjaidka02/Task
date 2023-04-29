import React, { useState, useEffect } from "react";
import "./Cart.css";

export const Cart = () => {
  useEffect(() => {
    // const items = [];
    // for (let i = 0; i < localStorage.length; i++) {
    //   const key = localStorage.key(i);
    //   const value = JSON.parse(localStorage.getItem(key));
    //   if (
    //     value &&
    //     value.hasOwnProperty("name") &&
    //     value.hasOwnProperty("price")
    //   ) {
    //     items.push(value);
    //   }
    // }
    // const storedShoes = localStorage.getItem("savedShoe") || [];
    // if (storedShoes) setCartItems(JSON.parse(storedShoes));
    // setCartItems(items);
  }, []);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedShoes = localStorage.getItem("savedShoe");
    if (storedShoes) {
      const parsedData = JSON.parse(storedShoes);
      if (Array.isArray(parsedData)) {
        setCartItems(parsedData);
      }
    }
  }, []);

  const handleRemoveItem = (id) => {
    localStorage.removeItem(id);

    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  //   const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <div className="cart-items-container">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <p>{item.name}</p>
              <p>₹{item.price}</p>
            </div>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      {/* <div className="cart-summary">
        <p>Total: ₹{total}</p>
      </div> */}
    </div>
  );
};
