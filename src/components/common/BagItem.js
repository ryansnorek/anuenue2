import { useContext } from "react";
import { shoppingContext } from "../../contexts";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";
import CountUp from "react-countup";


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
    const element = document.getElementById(`${String(item.id)}`);
    element.classList.add("fade-out");
    const updatedOrder = order.filter(
      (orderItem) => orderItem.name !== item.name
    );
    setTimeout(() => {
      setOrder([...updatedOrder]);
    }, 300)
  };

  return (
    <div className="bag-item-container" id={String(item.id)}>
      <div className="bag-item">
        <div className="actions" onClick={removeItem}>
          <img className="icon" src="../../images/icons/close.png" alt="bag" />
        </div>
        <div className="pic">
          <img className="skeleton" src={item.img} alt="bag item" />
        </div>
        <div className="text">
          <h3>{item.name}</h3>
          <p>price: ${item.price}</p>
        </div>
        <div className="qty">
          <input
            type="number"
            name="qty"
            min="0"
            value={values.qty}
            onChange={handleChange}
          />
        </div>
        <div className="total">
          <CountUp
            start={0}
            end={item.price * item.qty}
            prefix="$"
            duration={.618}
            useEasing={1}
            startOnMount={1}
          />
        </div>
      </div>
    </div>
  );
}
export default BagItem;
