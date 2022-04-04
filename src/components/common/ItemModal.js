import { useContext, useEffect } from "react";
import { effectsContext, shoppingContext } from "../../contexts";
import { animateUnmount } from "../../helper";
import useForm from "../../hooks/useForm";

function ItemModal({ item }) {
  const { setModalItem, order, setOrder } = useContext(shoppingContext);
  const { scrollPosition, setScrollPosition } = useContext(effectsContext);
  const [values, handleChange] = useForm({ qty: 1 });
  const position = `${scrollPosition + 42}px`;

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
          id: item.id,
          name: item.name,
          qty: values.qty,
          img: item.img,
          price: item.price,
        },
      ]);
    }
    animateUnmount(".modal-container", "slide-buy", setModalItem, "");
  };

  const handleCloseModal = () => {
    animateUnmount(".modal-container", "slide-close", setModalItem, "");
  };

  useEffect(() => {
    const page = document.querySelector(".wrapper");
    page.scrollTop < 70 && page.scrollTo(0, 70);
    setScrollPosition(page.scrollTop);
  }, [setScrollPosition]);

  return (
    <div className="modal-container">
      <div className="modal" style={{ marginTop: position }}>
        <img
          className="icon"
          onClick={handleCloseModal}
          src="../../images/icons/close.png"
          alt="close"
        />
        <section className="modal-item-container">
          <div className="image">
            <img src={item.img} alt={item.name} />
          </div>
          <div className="text-wrapper">
            <div className="text">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price}</p>
            </div>
            <div className="order-button">
              <input
                type="number"
                name="qty"
                min="0"
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
