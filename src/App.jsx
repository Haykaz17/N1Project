import React from "react";
import { Routes, Route } from "react-router-dom";
import Store from "./assets/navbar/components/store/Store";
import Navbar from "./assets/navbar/components/Navbar";
import Home from "./assets/navbar/components/Home/Home";
import Cart from "./assets/navbar/components/Cart/Cart";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
