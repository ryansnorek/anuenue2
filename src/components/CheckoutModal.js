import { shoppingContext } from "../contexts";
import { useState, useContext, useEffect } from "react";
import { animateUnmount } from "../helper";
import axios from "axios";

import { BASE_URL } from "../config";

import EmailModal from "./EmailModal";
import DeliveryModal from "./DeliveryModal";
import PaymentModal from "./PaymentModal";

function CheckoutModal() {
  const { checkingOut, setCheckingOut, order } = useContext(shoppingContext);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios
      .post(`${BASE_URL}/stripe/create-payment-intent`, { order })
      .then((res) => setClientSecret(res.data.client_secret))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    animateUnmount(".checkout-modal", "slide-buy", setCheckingOut, "delivery");
  };
  return (
    <section className="checkout-modal">
      <img
        className="small"
        src="../images/icons/anuenue_logo.png"
        alt="logo"
      />
      <div className="modal-wrapper">
        <div className="tabs">
          <button
            onClick={() => setCheckingOut("email")}
            id={checkingOut === "email" ? "cur" : ""}
          >
            Email
          </button>
          <button
            onClick={() => setCheckingOut("delivery")}
            id={checkingOut === "delivery" ? "cur" : ""}
          >
            Delivery
          </button>
          <button
            onClick={() => setCheckingOut("payment")}
            id={checkingOut === "payment" ? "cur" : ""}
          >
            Payment
          </button>
        </div>
        {checkingOut === "email" && <EmailModal />}
        {checkingOut === "delivery" && <DeliveryModal />}
        {checkingOut === "payment" && <PaymentModal clientSecret={clientSecret} />}
        {/* <img
        className="icon"
        onClick={() => setCheckingOut(false)}
        src="../../images/icons/close.png"
        alt="close"
      /> */}
      </div>
    </section>
  );
}
export default CheckoutModal;
