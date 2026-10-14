import React from "react";
import watch from "./assets/smartwatch.jpg";

function Product(props) {
  return (
    <div className="product">
      <img src={watch} alt="Smart Watch" />

      <div className="product-info">
        <h2>{props.name}</h2>

        <h3>{props.price}</h3>

        <p>
          Stylish and modern smart watch with useful features
          for everyday use.
        </p>

        <p>✓ Fitness Tracking</p>
        <p>✓ Heart Rate Monitor</p>
        <p>✓ Long Battery Life</p>

        <button
          onClick={() => props.setCount(props.count + 1)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;