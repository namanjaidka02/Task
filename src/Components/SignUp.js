import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SignUp.css";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [userInfo, setUserInfo] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || passWord === "" || name === "") {
      alert("Please fill the neccessary Information!");
      return;
    }

    let userInformation = {
      name: name,
      email: email,
      passWord: passWord,
    };

    const newUserInfo = [...userInfo, userInformation];
    localStorage.setItem("userInfo", JSON.stringify(newUserInfo));

    setEmail("");
    setName("");
    setPassWord("");
    navigate("/products");
    console.log("btn is clicked");
  };

  return (
    <div className="form">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>SignUp </h2>
          <label>Name:</label>
          <input
            className="name-input"
            type="text"
            placeholder="e.g. Leo Messi"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            placeholder="e.g. leomessi10@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="password">Password:</label>
          <input
            type="text"
            placeholder="****"
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
          />
          <input type="submit" value="Submit" className="submit-input" />

          <p>Already have an account? </p>
          <Link to="/login" className="link">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};
