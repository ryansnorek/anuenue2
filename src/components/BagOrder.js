import { Link } from "react-router-dom";

import BagItem from "./common/BagItem";
import CountUp from "react-countup";

function BagOrder({ order, total }) {
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
        <Link to="/checkout">Checkout</Link>
      </section>
    </>
  );
}
export default BagOrder;
