import React from "react";
import "./ProductCart.scss";
import { useStateValue } from "../helper/StateProvider";

function ProductCart({ id, title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = () => {
    dispatch({
      type: `REMOVE_FROM_CART`,
      id: id,
    });
  };

  return (
    <div className="productcart">
      <img className="productcart-image" src={image} alt="" />
      <div className="product-info">
        <strong className="product-titel">{title}</strong>
        <p className="product-price">${price}</p>
      </div>
      <button onClick={removeItem}>Remove from Cart</button>
    </div>
  );
}

export default ProductCart;
