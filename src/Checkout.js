import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import ProductCart from "./ProductCart";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div>
      <div className="checkout">
        <div className="checkout-left">
          {basket.length === 0 ? (
            <div>
              <h2 className="checkout-title">
                {" "}
                Your shopping basket is empty.
              </h2>
              <p>You have no items in your basket.</p>
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

          <div className="checkout-right">
            <Subtotal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
