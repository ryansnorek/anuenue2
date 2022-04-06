import { shoppingContext, checkingOutContext } from "../contexts";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

import { BASE_URL } from "../config";

import EmailModal from "./EmailModal";
import DeliveryModal from "./DeliveryModal";
import PaymentModal from "./PaymentModal";

const InititalDelivery = {
  street: "",
  city: "",
  zip: "",
};

function CheckoutModal() {
  const { checkingOut, setCheckingOut, order } = useContext(shoppingContext);
  const [clientSecret, setClientSecret] = useState("");

  const [email, setEmail] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState(InititalDelivery);

  const handleClickPayment = () => {
    const { street, city, zip } = deliveryAddress;
    if (email && street && city && zip) {
      setCheckingOut("payment");
    }
  };

  useEffect(() => {
    axios
      .post(`${BASE_URL}/stripe/create-payment-intent`, { order })
      .then((res) => setClientSecret(res.data.client_secret))
      .catch((err) => console.log(err));
  }, []); //eslint-disable-line

  return (
    <checkingOutContext.Provider
      value={{
        email,
        setEmail,
        deliveryAddress,
        setDeliveryAddress,
      }}
    >
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
              id={checkingOut === "email" ? "highlight" : ""}
            >
              Email
            </button>
            <button
              onClick={() => setCheckingOut("delivery")}
              id={checkingOut === "delivery" ? "highlight" : ""}
            >
              Delivery
            </button>
            <button
              onClick={handleClickPayment}
              id={checkingOut === "payment" ? "highlight" : ""}
            >
              Payment
            </button>
          </div>
          {checkingOut === "email" && <EmailModal />}
          {checkingOut === "delivery" && <DeliveryModal />}
          {checkingOut === "payment" && (
            <PaymentModal clientSecret={clientSecret} />
          )}
        </div>
        <img
          className="icon"
          onClick={() => setCheckingOut(false)}
          src="../../images/icons/close.png"
          alt="close"
        />
      </section>
    </checkingOutContext.Provider>
  );
}
export default CheckoutModal;
