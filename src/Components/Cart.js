import { useState, useEffect } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

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
    alert("Shoe Removed");
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
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
        <button onClick={handleClick} className="back-btn">
          Back
        </button>
      </div>
    </div>
  );
};
