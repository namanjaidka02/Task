import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SignUp.css";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [userInfo, setUserInfo] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || name === "") {
      alert("Please fill the necessary Information!");
      return;
    }
    const userId =
      userInfo.length < 1 ? 0 : userInfo[userInfo.length - 1].id + 1;
    let userInformation = {
      name: name,
      email: email,
      password: password,
      id: userId,
    };

    const newUserInfo = [...userInfo, userInformation];
    localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
    setUserInfo(newUserInfo);
    setEmail("");
    setName("");
    setpassword("");
    alert(`Welcome ${name}`);
    navigate("/products");
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
          <label className="password">password:</label>
          <input
            type="text"
            placeholder="****"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
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
