import { shoppingContext } from "../contexts";
import { useContext, useEffect } from "react";
import { animateUnmount } from "../helper";

import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLISHABLE_KEY } from "../config";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

function PaymentModal({ clientSecret }) {
  const stripePromise = loadStripe(`${STRIPE_PUBLISHABLE_KEY}`);
  const options = { clientSecret };

  return (
    <section className="payment-modal">
        <Elements
          stripe={stripePromise}
          options={options}
        >
          <CheckoutForm />
        </Elements>
    </section>
  );
}
export default PaymentModal;
