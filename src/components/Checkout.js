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
  const { order } = useContext(shoppingContext);

  // const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);
  const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
  const [clientSecret, setClientSecret] = useState("");
  const options = { clientSecret };

  // on checkout remove from local storage

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
      <div className="stripe-wrapper">
      <Elements className="stripe-element" stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
      </div>
    </div>
  );
}
export default Checkout;
