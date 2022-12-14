import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./ProductList.scss";

function Jewelry() {
  const url = "https://fakestoreapi.com/products/category/jewelery";
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setProducts({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setProducts({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  let content = null;

  //if (products.error) {
  //  content = <p>There was an error, please refresh or try again later.</p>;
  //}

  //if (products.loading) {
  //   content = <Loader></Loader>;
  // }

  if (products.data) {
    content = products.data.map((product, key) => (
      <div className="home-row">
        <ProductCard product={product} />
      </div>
    ));
  }
  return <div>{content}</div>;
}

export default Jewelry;
