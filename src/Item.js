import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductCard.scss";
import { useStateValue } from "./StateProvider";

function Item() {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const [product, setProduct] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data);
    });
  }, [url]);

  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        description: product.description,
        image: product.image,
      },
    });
  };

  if (product) {
    return (
      <div className="product">
        <div className="product-info">
          <div>{product.category}</div>
          <h1>{product.title}</h1>
          <div className="product-review">
            <p>{product.description}</p>
          </div>
        </div>
        <img src={product.image} alt="" />
        <h2 className="product-price">
          <small>$</small>
          <strong>{product.price}</strong>
        </h2>
        <button onClick={addToBasket}>
          <h3>Add to Basket</h3>
        </button>
        <button onClick={addToBasket}>
          <h3>Remove from Basket</h3>
        </button>
      </div>
    );
  }
}
export default Item;
