import React from "react";
import "./Checkout.scss";
import Subtotal from "./Subtotal";
import { useStateValue } from "../helper/StateProvider";
import ProductCart from "./ProductCart";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        {basket.length === 0 ? (
          <div>
            <h2 className="checkout-title"> </h2>
            <p>You have no items in your cart.</p>
          </div>
        ) : (
          <div>
            <h2 className="shoppingBasketTitle">Items in your basket:</h2>
            {basket.map((item) => (
              <ProductCart
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout-right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
