import { shoppingContext } from "../contexts";
import { useContext } from "react";
import { animateUnmount } from "../helper";

function EmailModal() {
  const { setCheckingOut } = useContext(shoppingContext);

  const handleSubmitDelivery = (e) => {
    e.preventDefault();
    animateUnmount(".delivery-modal", "slide-buy", setCheckingOut, "delivery")
  };
  return (
    <section className="delivery-modal">
      <div className="form-wrapper">
        <form onSubmit={handleSubmitDelivery}>
          <h3>Delivery Address</h3>
          <input type="text" name="address" />
          <button type="submit">Ok</button>
        </form>
      </div>
    </section>
  );
}
export default EmailModal;