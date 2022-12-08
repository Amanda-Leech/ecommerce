import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div>
      <div className="checkout">
        <div className="checkout-left">
          <div>
            <h2 className="checkout-title"> Your shopping basket is empty.</h2>
            <p>You have no items in your basket.</p>
          </div>
          <div className="checkout-right">
            <Subtotal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
