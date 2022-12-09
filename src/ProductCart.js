import React from "react";
import "./ProductCart.css";
import { useStateValue } from "./StateProvider";

function ProductCart({ id, title, description, image, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="productcart">
      <img className="productcart-image" src={image} alt="" />
      <div className="product-info">
        <p>{title}</p>
        <p>{description}</p>
        <p>${price}</p>
      </div>
      <button onCLick={removeItem}>Remove from Cart</button>
    </div>
  );
}

export default ProductCart;
