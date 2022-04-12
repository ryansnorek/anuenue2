import { shoppingContext, checkingOutContext } from "../contexts";
import { useState, useContext, useEffect } from "react";

import EmailModal from "./EmailModal";
import DeliveryModal from "./DeliveryModal";
import PaymentModal from "./PaymentModal";
import { createStripePayment } from "../helper";

const InititalDelivery = {
  street: "",
  city: "",
  zip: "",
  area: "",
};

function CheckoutModal() {
  const { checkingOut, setCheckingOut, order } = useContext(shoppingContext);
  const [clientSecret, setClientSecret] = useState("");

  const [email, setEmail] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState(InititalDelivery);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClickPayment = () => {
    const { street, area } = deliveryAddress;
    if (email && street && area) {
      setErrorMessage("");
      setCheckingOut("payment");
    } else {
      if (!email) setErrorMessage("Missing email");
      else if (!street) setErrorMessage("Missing delivery address");
      else setErrorMessage("Please select delivery area");
    }
  };

  useEffect(() => {
    const createPayment = async () => {
      createStripePayment(order)
        .then((secret) => setClientSecret(secret))
        .catch((err) => console.log(err));
    };
    createPayment();
  }, []); //eslint-disable-line

  return (
    <checkingOutContext.Provider
      value={{
        email,
        setEmail,
        deliveryAddress,
        setDeliveryAddress,
        setErrorMessage,
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
          {errorMessage && <h3 id="error">{errorMessage}</h3>}
          {checkingOut === "email" && <EmailModal />}
          {checkingOut === "delivery" && <DeliveryModal />}
          {checkingOut === "payment" &&
            email &&
            deliveryAddress.street &&
            deliveryAddress.area && (
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
