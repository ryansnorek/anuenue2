import { useEffect, useContext, useState } from "react";

import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import axios from "axios";

import { shoppingContext } from "../contexts";

import CheckoutForm from "./CheckoutForm";

function Checkout() {
  const { setCheckingOut, order } = useContext(shoppingContext);

  // const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);
  const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
  const [clientSecret, setClientSecret] = useState("");
  const options = { clientSecret };

  // on checkout remove from local storage

  useEffect(() => {
    setCheckingOut(true);
    const wrapper = document.querySelector(".wrapper");
    wrapper.scrollTo(0, 0);
    return () => setCheckingOut(false);
  }, [setCheckingOut]);

  useEffect(() => {
    axios
      .post("http://localhost:8000/stripe/create-payment-intent", { order })
      .then((res) => setClientSecret(res.data.client_secret))
      .catch((err) => console.log(err));
  }, [order]);

  if (!clientSecret) {
    return <h1>loading</h1>;
  }
  return (
    <div className="checkout-order">
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
export default Checkout;
