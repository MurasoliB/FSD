import React, { useState } from "react";
import Header from "./Header";
import Product from "./Product";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Header name="SMART SHOP" />

      <section className="welcome">
        <h2>Welcome to Smart Shop</h2>
        <p>Find the best smart products at affordable prices.</p>
      </section>

      <Product
        name="Smart Watch"
        price="₹1500"
        count={count}
        setCount={setCount}
      />

      <div className="cart">
        <h2>Shopping Cart</h2>
        <p>Products Added: {count}</p>

        <button onClick={() => setShowCart(!showCart)}>
          {showCart ? "Hide Cart" : "View Cart"}
        </button>

        {showCart && (
          <div className="cart-details">
            {count > 0 ? (
              <>
                <h3>Cart Items</h3>
                <p>Smart Watch × {count}</p>
                <p>Price: ₹{1500 * count}</p>
                <button>Checkout</button>
              </>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        )}
      </div>

      <footer>
        <p>© 2026 Smart Shop | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;