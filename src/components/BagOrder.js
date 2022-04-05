import BagItem from "./common/BagItem";
import CountUp from "react-countup";
import { useContext } from "react";
import { effectsContext, shoppingContext } from "../contexts";

import CheckoutModal from "./CheckoutModal";
import Checkout from "./Checkout";

function BagOrder({ total }) {
  const { order, checkingOut, setCheckingOut } = useContext(shoppingContext);
  const { setScrollPosition } = useContext(effectsContext);

  const handleClickCheckout = () => {
    const wrapper = document.querySelector(".wrapper");
    setScrollPosition(wrapper.scrollTop);
    setCheckingOut("email");
  };

  const blur = (classname) => `${classname} ${checkingOut && "blur"}`;

  return (
    <>
      <section className={blur("order")}>
        {order.map((item) => {
          return <BagItem key={item.id} item={item} />;
        })}
      </section>
      <section className={blur("checkout")}>
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
        <button onClick={handleClickCheckout}>Checkout</button>
      </section>

      {/* {checkingOut && (     
        <section className="stripe-checkout">
          <Checkout />
        </section>
      )} */}
    </>
  );
}
export default BagOrder;
