import { useEffect, useContext } from "react";

import { shoppingContext } from "../contexts";

function Checkout() {
  const { setCheckingOut } = useContext(shoppingContext);

  useEffect(() => {
    setCheckingOut(true);
    const wrapper = document.querySelector(".wrapper");
    wrapper.scrollTo(0, 0);
    return () => setCheckingOut(false);
  }, []);

  return <div className="checkout-order"></div>;
}
export default Checkout;
