import { useContext } from "react";
import { shoppingContext } from "../contexts";
import BagItem from "./common/BagItem";

function Bag() {
  const { order } = useContext(shoppingContext);

  

  return (
    <div className="bag">
      <section className="order">
        {order.map((item) => {
          return (
            <BagItem key={item.id} item={item}/>
          );
        })}
      </section>
    </div>
  );
}
export default Bag;
