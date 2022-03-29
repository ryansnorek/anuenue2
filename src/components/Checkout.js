import { useEffect, useContext, useState } from "react";
import axios from "axios";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { shoppingContext } from "../contexts";

import CheckoutForm from "./CheckoutForm";

function Checkout() {
  const { order, setCheckingOut } = useContext(shoppingContext);

  // const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);
  const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
  const [clientSecret, setClientSecret] = useState("");
  const options = { clientSecret };

  useEffect(() => {
    setCheckingOut(true);
    axios
      .post("http://anuenue.herokuapp.com/stripe/create-payment-intent", { order })
      .then((res) => setClientSecret(res.data.client_secret))
      .catch((err) => console.log(err));
  }, [order, setCheckingOut]);

  if (!clientSecret) {
    return <h1>loading</h1>;
  }
  return (
    <div className="checkout-order">
      <div className="stripe-wrapper">
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
