import { useContext } from "react";
import { shoppingContext } from "../../contexts";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";

function BagItem({ item }) {
  const { order, setOrder } = useContext(shoppingContext);
  const [values, handleChange] = useForm({ qty: item.qty });
  
  useEffect(() => {
    const itemIndex = order.findIndex(
        (orderItem) => orderItem.name === item.name
      );
    const updatedOrder = [...order];
    updatedOrder[itemIndex].qty = Number(values.qty);
    setOrder([...updatedOrder]);
  }, [values]); //eslint-disable-line

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
          <h3>{item.name}</h3>
          <div className="qty">
            <p>qty:</p>
            <input
              type="number"
              name="qty"
              value={values.qty}
              onChange={handleChange}
            />
          </div>
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
        </div>
      </div>
    </div>
  );
}
export default BagItem;
