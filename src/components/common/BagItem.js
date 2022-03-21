import { useContext } from "react";
import { shoppingContext } from "../../contexts";

function BagItem({ item }) {
  const { order, setOrder } = useContext(shoppingContext);

  const removeItem = () => {
    const updatedOrder = order.filter(
      (orderItem) => orderItem.name !== item.name
    );
    setOrder([...updatedOrder]);
  };
  return (
    <div className="bag-item-container">
      <div className="bag-item">
        <div className="pic">
          <img className="skeleton" src={item.img} alt="bag item" />
        </div>
        <div className="text">
          <h5>{item.name}</h5>
          <p>qty: {item.qty}</p>
          <p>price: ${item.price}</p>
          <p>total: ${item.price * item.qty}</p>
        </div>
        <div className="actions">
          <img
            className="icon"
            onClick={removeItem}
            src="../../images/icons/close.png"
            alt="bag"
          />
          <button>update</button>
        </div>
      </div>
    </div>
  );
}
export default BagItem;
