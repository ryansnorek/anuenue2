import { useContext } from "react";
import { shoppingContext } from "../contexts";

function Bag() {
  const { order } = useContext(shoppingContext);

  console.log(order)
  return (
    <div className="bag">
      <section className="order">

      </section>
    </div>
  );
}
export default Bag;
