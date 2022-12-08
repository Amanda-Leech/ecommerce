import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product-info">
        <h2>{title}</h2>
        <div className="product-rating">
          <p>
            Thin, crispy cookies infused with raspberry flavor, dipped in
            chocolaty coating
          </p>
        </div>
      </div>
      <img src={image} alt="(none)" />
      <h2 className="product-price">
        <small>$</small>
        <strong>{price}</strong>
      </h2>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
