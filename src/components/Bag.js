import { useContext, useEffect, useState } from "react";
import { shoppingContext } from "../contexts";

import { scrollTo } from "../helper";

import BagOrder from "./BagOrder";

function Bag() {
  const { order } = useContext(shoppingContext);
  const [total, setTotal] = useState(0);

  useEffect(() => scrollTo(0), []);

  useEffect(() => {
    const orderTotal = order.reduce((x, y) => {
      return x + y.price * y.qty;
    }, 0);
    setTotal(orderTotal);
  }, [order]);

  return (
    <div className="bag">
      <div className="columns">
        <h3 className="name">Item</h3>
        <h3 className="quantity">Quantity</h3>
        <h3 className="total">Total</h3>
      </div>
      {order.length > 0 ? (
        <BagOrder total={total} />
      ) : (
        <h2>No items</h2>
      )}
    </div>
  );
}
export default Bag;
