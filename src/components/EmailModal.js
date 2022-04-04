import { shoppingContext } from "../contexts";
import { useContext } from "react";
import { animateUnmount } from "../helper";

function EmailModal() {
  const { setCheckingOut } = useContext(shoppingContext);

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    animateUnmount(".email-modal", "slide-buy", setCheckingOut, "delivery")
  };
  return (
    <section className="email-modal">
      <div className="form-wrapper">
        <form onSubmit={handleSubmitEmail}>
          <h3>What is your email?</h3>
          <input type="email" name="email" />
          <button type="submit">Ok</button>
        </form>
      </div>
    </section>
  );
}
export default EmailModal;
