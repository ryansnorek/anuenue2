import { useContext, useState, useEffect } from "react";
import { shoppingContext } from "../../contexts";
import useForm from "../../hooks/useForm";

function ItemModal({ item }) {
  const { setModalItem, order, setOrder } = useContext(shoppingContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [values, handleChange] = useForm({ qty: 1 });

  useEffect(() => {
    const page = document.querySelector(".wrapper");
    page.scrollTop < 70 && page.scrollTo(0, 70);
    setScrollPosition(page.scrollTop);
  }, []);

  const handleAddItem = () => {
    const orderItemExists = order.findIndex(
      (orderItem) => orderItem.name === item.name
    );
    if (orderItemExists !== -1) {
      const updatedOrder = [...order];
      updatedOrder[orderItemExists].qty += Number(values.qty);
      setOrder([...updatedOrder]);
    } else {
      setOrder([
        ...order,
        {
          name: item.name,
          qty: Number(values.qty),
        },
      ]);
    }
    setModalItem("");
  };

  return (
    <div className="modal-container">
      <div className="modal" style={{ marginTop: `${scrollPosition + 42}px` }}>
        <img
          className="icon"
          onClick={() => setModalItem("")}
          src="../../images/icons/close.png"
          alt="bag"
        />
        <section className="modal-item-container">
          <img src={item.img} alt={item.name} />
          <div className="text-wrapper">
            <div className="text">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price}</p>
            </div>
            <div className="order-button">
              <input
                type="text"
                name="qty"
                value={values.qty}
                onChange={handleChange}
              />
              <button onClick={handleAddItem}>Add</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default ItemModal;
