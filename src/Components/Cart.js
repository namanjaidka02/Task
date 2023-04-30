import { useState, useEffect } from "react";
import "./Cart.css";

export const Cart = () => {
  const [allShoes, setAllShoes] = useState([]);

  useEffect(() => {
    const shoeData = localStorage.getItem("savedShoe");
    if (shoeData) {
      setAllShoes(JSON.parse(shoeData));
    }
  }, []);
  const handleDelete = (shoe) => {
    const updateShoes = allShoes.filter((e) => {
      return e.id !== shoe.id;
    });
    localStorage.setItem("savedShoe", JSON.stringify(updateShoes));
    setAllShoes(updateShoes);
  };

  return (
    <div className="products-container">
      <h1>Cart</h1>
      <div className="img-container">
        {allShoes.map((shoe) => (
          <ul className="img-item" key={shoe.id}>
            <img src={shoe.image} alt={shoe.name} />
            <p>{shoe.name}</p>
            <p>₹{shoe.price}</p>
            <button onClick={() => handleDelete(shoe)}>Remove</button>
          </ul>
        ))}
      </div>
    </div>
  );
};
