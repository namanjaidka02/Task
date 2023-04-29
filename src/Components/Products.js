import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

export const Products = () => {
  const [selectedShoes, setSelectedShoes] = useState("");
  const navigate = useNavigate();

  const shoes = [
    {
      id: "1",
      name: "Nike Air Jordan",
      price: 10000,
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/626eda7a-bba9-4f76-b1d8-fe4b3bfbf600/air-jordan-1-mid-se-shoes-BcB3MD.png",
    },
    {
      id: "2",
      name: "Nike Air Jordan",
      price: 12999,
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5927b4c8-6f28-4334-a174-20edb76c3c29/air-jordan-1-retro-high-og-mens-shoes-JHpxkn.png",
    },
    {
      id: "3",
      name: "Nike Jordan High Top shoes",
      price: 15999,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaz3Vb40DiKLcrgZ2vPqL6CDYxYvYmKMBYsA&usqp=CAU",
    },
    {
      id: "4",
      name: "Nike Jordan High Top shoes",
      price: 10999,
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/af407608-9bbd-4140-8f5a-e1a24284574d/air-jordan-6-retro-shoes-4m3b9d.png",
    },
    {
      id: "5",
      name: "Air Jordan 1 Low 'Travis Scott x Fragment'",
      price: 13495,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5aZBRlJmGGUj7xcDf8yhtA0HyC_e3iLAKv_XrMdk1tXKIyVXIxI9X8f_3Qb87riB8G4&usqp=CAU",
    },
    {
      id: "6",
      name: "Jordan 1 Retro High Dior",
      price: 210495,
      image:
        "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Dior-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1607043976&q=75",
    },
  ];

  const handleClick = (shoe) => {
    localStorage.setItem("savedShoe", JSON.stringify(shoe));
    navigate("/cart");
  };
  return (
    <div className="products-container">
      <h1>Shoes</h1>
      <div className="img-container">
        {shoes.map((shoe) => (
          <ul className="img-item" key={shoe.id}>
            <img
              src={shoe.image}
              alt={shoe.name}
              onClick={() => setSelectedShoes(shoe.id)}
            />
            <p>{shoe.name}</p>
            <p>₹{shoe.price}</p>
            <button onClick={() => handleClick(shoe)}>Add to cart</button>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Products;
