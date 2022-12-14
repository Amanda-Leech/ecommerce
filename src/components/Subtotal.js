import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../helper/StateProvider";
import "./Subtotal.scss";

function Subtotal() {
  const getCartTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      {}
      <CurrencyFormat
        renderText={(value) => (
          <p>
            Subtotal({basket.length} items) <strong>{`${value}`}</strong>
          </p>
        )}
        decimalScale={2}
        value={getCartTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
