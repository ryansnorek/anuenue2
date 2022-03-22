import { useEffect } from "react";

function Checkout() {
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.scrollTo(0, 0);
  }, []);

  return <div className="checkout-order"></div>;
}
export default Checkout;
