import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { BASE_URL, STRIPE_PUBLISHABLE_KEY } from "../config";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { effectsContext, shoppingContext } from "../contexts";

import CheckoutForm from "./CheckoutForm";

function Checkout() {
  const { order, setCheckingOut } = useContext(shoppingContext);
  const { scrollPosition } = useContext(effectsContext);
  const stripePromise = loadStripe(`${STRIPE_PUBLISHABLE_KEY}`);
  const [clientSecret, setClientSecret] = useState("");
  const options = { clientSecret };

  useEffect(() => {
    axios
      .post(`${BASE_URL}/stripe/create-payment-intent`, { order })
      .then((res) => setClientSecret(res.data.client_secret))
      .catch((err) => console.log(err));
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
