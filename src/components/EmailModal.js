import { shoppingContext } from "../contexts";
import { useContext } from "react";

function EmailModal() {
  const { setCheckingOut } = useContext(shoppingContext);

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    setCheckingOut("delivery");
  };
  return (
    <section className="checkout-modal-tab">
      <div className="form-wrapper">
        <form onSubmit={handleSubmitEmail}>
          <h3>What is your email?</h3>
          <input type="email" name="email" required/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
export default EmailModal;
