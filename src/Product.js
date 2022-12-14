import React from "react";
import "./Product.scss";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, description }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        description: description,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-info">
        <h2>{title}</h2>
        <div className="product-review">
          <p>{description}</p>
        </div>
      </div>
      <img src={image} alt="(none)" />
      <h2 className="product-price">
        <small>$</small>
        <strong>{price}</strong>
      </h2>
      <button onClick={addToBasket}>
        <h3>Add to Basket</h3>
      </button>
    </div>
  );
}

export default Product;
