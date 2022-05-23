import { useState, useEffect } from "react";
import Banner from "./Banner";
import logo from "../assets/logo.png";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import "../styles/Layout.css";

function App() {
  let activeCart = localStorage.getItem("activeCart") !== null ? JSON.parse(localStorage.getItem("activeCart")) : []

  const [cart, updateCart] = useState(activeCart);

  useEffect(() => {
    localStorage.setItem("activeCart", JSON.stringify(cart));
    console.log("saved");
  }, [cart]);

  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
