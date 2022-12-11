import React from "react";
import "./ProductCard.css";
import { useStateValue } from "./StateProvider";

function ProductCard(props) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.product.id,
        title: props.product.title,
        price: props.product.price,
        category: props.product.category,
        description: props.product.description,
        image: props.product.image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-info">
        <h1>{props.product.title}</h1>
        <div className="product-review">
          <p>{props.product.description}</p>
        </div>
      </div>
      <img src={props.product.image} alt="" />
      <h2 className="product-price">
        <small>$</small>
        <strong>{props.product.price}</strong>
      </h2>
      <button onClick={addToBasket}>
        <h3>Add to Basket</h3>
      </button>
    </div>
  );
}

export default ProductCard;
