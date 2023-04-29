import React from "react";
import { useState } from "react";
import "./SignUp.css";

import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Email === "" || Password === "") {
      alert("Please fill the neccessary Information!");

      return;
    }
    setEmail("");
    setPassword("");
    navigate("/products");
  };

  return (
    <div className="form">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h3>Login</h3>
          <hr />
          <label className="email">Email Address</label>
          <input
            type="email"
            placeholder="e.g. leonelMessi10@gmail.com"
            value={Email}
            onChange={(e) => {
              setEmail([e.target.value]);
            }}
          />
          <label className="password">Password</label>
          <input
            type="password"
            placeholder="****"
            value={Password}
            onChange={(e) => {
              setPassword([e.target.value]);
            }}
          />

          <input className="submit-input login-input" type="submit" />
        </form>
      </div>
    </div>
  );
};
