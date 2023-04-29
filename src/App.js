import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./Components/SignUp";
import { Login } from "./Components/Login";
import { Products } from "./Components/Products";
import { Cart } from "./Components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
