import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Redux Shopping Cart</h1>
      <div className="main-content">
        <ProductList />
        <Cart />
      </div>
      <footer className="footer">
        Made by <span>Vasu Watts</span>
      </footer>
    </div>
  );
}

export default App;
