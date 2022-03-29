import { useEffect, useContext } from "react";
import { shoppingContext } from "../contexts";

function CheckoutComplete() {
  const { setOrder } = useContext(shoppingContext);

  useEffect(() => {
    setOrder([]);
    localStorage.removeItem("order");
  }, []); //eslint-disable-line

  return (
    <div className="complete">
      <h1>Order is in the oven!</h1>
    </div>
  );
}
export default CheckoutComplete;
