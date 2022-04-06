import { shoppingContext, checkingOutContext } from "../contexts";
import { useContext } from "react";

function EmailModal() {
  const { setCheckingOut } = useContext(shoppingContext);
  const { email, deliveryAddress, setDeliveryAddress, setErrorMessage } =
    useContext(checkingOutContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryAddress({
      ...deliveryAddress,
      [name]: value,
    });
  };

  const handleClickArea = (e) => {
    setDeliveryAddress({
      ...deliveryAddress,
      area: e.target.textContent,
    });
  };

  const handleSubmitDelivery = (e) => {
    e.preventDefault();
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
  return (
    <section className="checkout-modal-tab">
      <div className="form-wrapper">
        <form onSubmit={handleSubmitDelivery}>
          <h3>Delivery Address</h3>
          <input
            type="text"
            name="street"
            value={deliveryAddress.street}
            placeholder="Street"
            onChange={handleChange}
            required
          />
          <div className="area">
            <button id="west" onClick={handleClickArea}>
              West Side
            </button>
            <button id="kahului" onClick={handleClickArea}>
              Kahului
            </button>
            <button id="kihei" onClick={handleClickArea}>
              Kihei
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default EmailModal;
