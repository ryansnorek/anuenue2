import { Link } from "react-router-dom";

import BagItem from "./common/BagItem";
import CountUp from "react-countup";
import Checkout from "./Checkout";
import { useState } from "react";

function BagOrder({ order, total }) {
  const [confirmCheckout, setConfirmCheckout] = useState(false);

  return (
    <>
      <section className="order">
        {order.map((item) => {
          return <BagItem key={item.id} item={item} />;
        })}
      </section>
      <section className="checkout">
        <div className="total">
          <h2>Subtotal</h2>
          <CountUp
            className="count"
            start={0}
            end={total}
            prefix="$"
            duration={1.618}
            useEasing={1}
            startOnMount={1}
          />
        </div>
        <button onClick={() => setConfirmCheckout(true)}>Checkout</button>
      </section>
      {confirmCheckout && (
        <section className="stripe-checkout">
          <Checkout />
        </section>
      )}
    </>
  );
}
export default BagOrder;
