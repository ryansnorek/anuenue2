import { shoppingContext } from "../contexts";
import { useContext } from "react";
import { animateUnmount } from "../helper";

import EmailModal from "./EmailModal";

function CheckoutModal() {
  const { checkingOut, setCheckingOut } = useContext(shoppingContext);

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    animateUnmount(".checkout-modal", "slide-buy", setCheckingOut, "delivery")
  };
  return (
    <section className="checkout-modal">
      <div className="modal-wrapper">
          <div className="tabs">
            <button>Email</button>
            <button>Delivery</button>
            <button>Payment</button>
          </div>
      {checkingOut === "email" && <EmailModal />}
      </div>
    </section>
  );
}
export default CheckoutModal;
