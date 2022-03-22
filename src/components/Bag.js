import { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { shoppingContext } from "../contexts";

import BagItem from "./common/BagItem";
import CountUp from "react-countup";

function Bag() {
  const { order } = useContext(shoppingContext);
  const [total, setTotal] = useState(0);
  const countStart = useRef();

  useEffect(() => {
    const orderTotal = order.reduce((x, y) => {
      return x + y.price * y.qty;
    }, 0);
    setTotal(orderTotal);
    console.log("start",countStart)
  }, [order]);

  return (
    <div className="bag">
      <div className="columns">
        <h3 className="name">Item</h3>
        <h3 className="quantity">Quantity</h3>
        <h3 className="total">Total</h3>
      </div>
      <section className="order">
        {order.map((item) => {
          return <BagItem key={item.id} item={item} countStart={countStart} />;
        })}
      </section>
      <section className="checkout">
        <div className="total">
          <h2>Subtotal</h2>
          <h3>${total}</h3>
        </div>
        <Link to="/checkout">Checkout</Link>
      </section>
    </div>
  );
}
export default Bag;
