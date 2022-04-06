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
    <section className="checkout-modal-tab">
      <div className="form-wrapper">
        <form onSubmit={handleSubmitDelivery}>
          <h3>Delivery Address</h3>
          <input type="text" name="address" placeholder="Street" required/>
          <input type="text" name="address" placeholder="City" required/>
          <input type="text" name="address" placeholder="Zip" required/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
export default EmailModal;