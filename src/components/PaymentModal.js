import { shoppingContext } from "../contexts";
import { useContext, useEffect } from "react";
import { animateUnmount } from "../helper";

import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLISHABLE_KEY } from "../config";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

function PaymentModal({ clientSecret }) {
  const { checkingOut } = useContext(shoppingContext);

  const stripePromise = loadStripe(`${STRIPE_PUBLISHABLE_KEY}`);
  const options = { clientSecret };

  useEffect(() => {
    const el = document.querySelector(".payment-modal");
    checkingOut === "payment" && el.classList.remove("hide-pay");
    return () => el.classList.add("hide-pay")
  }, [checkingOut])

  return (
    <section className="payment-modal hide-pay">
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
