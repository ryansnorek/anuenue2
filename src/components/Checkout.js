import { useEffect, useContext, useState } from "react";
import { STRIPE_PUBLISHABLE_KEY } from "../config";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { effectsContext, shoppingContext } from "../contexts";

import CheckoutForm from "./CheckoutForm";
import { createStripePayment } from "../helper";

function Checkout() {
  const { order, setCheckingOut } = useContext(shoppingContext);
  const { scrollPosition } = useContext(effectsContext);
  const stripePromise = loadStripe(`${STRIPE_PUBLISHABLE_KEY}`);
  const [clientSecret, setClientSecret] = useState("");
  const options = { clientSecret };

  useEffect(() => {
    const createPayment = async () => {
      const { secret } = await createStripePayment(order);
      secret && setClientSecret(secret);
    };
    createPayment();
  }, [order, scrollPosition]);

  if (!clientSecret) {
    return <div className="spinner" id="spinner"></div>;
  }
  return (
    <div className="checkout-order">
      <div className="stripe-wrapper" style={{ marginTop: scrollPosition }}>
        <img
          className="logo pay"
          src="../images/icons/anuenue_logo.png"
          alt="logo"
        />
        <Elements
          className="stripe-element"
          stripe={stripePromise}
          options={options}
        >
          <CheckoutForm />
        </Elements>
        <img
          className="icon"
          onClick={() => setCheckingOut(false)}
          src="../../images/icons/close.png"
          alt="close"
        />
      </div>
    </div>
  );
}
export default Checkout;
