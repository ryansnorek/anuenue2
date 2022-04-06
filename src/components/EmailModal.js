import { shoppingContext, checkingOutContext } from "../contexts";
import { useContext } from "react";

function EmailModal() {
  const { setCheckingOut } = useContext(shoppingContext);
  const { email, setEmail } = useContext(checkingOutContext);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmitEmail = (e) => {
    e.preventDefault();
    email && setCheckingOut("delivery");
  };
  return (
    <section className="checkout-modal-tab">
      <div className="form-wrapper">
        <form onSubmit={handleSubmitEmail}>
          <h3>What is your email?</h3>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
export default EmailModal;
