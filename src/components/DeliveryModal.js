import { shoppingContext, checkingOutContext } from "../contexts";
import { useContext } from "react";

function EmailModal() {
  const { setCheckingOut } = useContext(shoppingContext);
  const { deliveryAddress, setDeliveryAddress } =
    useContext(checkingOutContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryAddress({
      ...deliveryAddress,
      [name]: value
    });
  };

  const handleSubmitDelivery = (e) => {
    e.preventDefault();
    setCheckingOut("payment");
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
          <input
            type="text"
            name="city"
            value={deliveryAddress.city}
            placeholder="City"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="zip"
            value={deliveryAddress.zip}
            placeholder="Zip"
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
