import BagItem from "./common/BagItem";
import CountUp from "react-countup";
import Checkout from "./Checkout";
import { useContext } from "react";
import { shoppingContext } from "../contexts";

function BagOrder({ total }) {
  const { order, checkingOut, setCheckingOut } = useContext(shoppingContext);

  return (
    <>
      <section className={`order ${checkingOut && "blur"}`}>
        {order.map((item) => {
          return <BagItem key={item.id} item={item} />;
        })}
      </section>
      <section className={`checkout ${checkingOut && "blur"}`}>
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
        <button onClick={() => setCheckingOut(true)}>Checkout</button>
      </section>
      {checkingOut && (
        <section className="stripe-checkout">
          <Checkout />
        </section>
      )}
    </>
  );
}
export default BagOrder;
