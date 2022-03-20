import { useContext, useState, useEffect } from "react";
import { effectsContext } from "../../contexts";
import useForm from "../../hooks/useForm";

function ItemModal({ item }) {
  const { setModalItem } = useContext(effectsContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [values, handleChange] = useForm({ input: "" });

  useEffect(() => {
    const page = document.querySelector(".wrapper");
    page.scrollTop < 70 && page.scrollTo(0, 70);
    setScrollPosition(page.scrollTop);
  }, []);

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
                name="input"
                defaultValue={1}
                value={values.input}
                onChange={handleChange}
              />
              <button>Add</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default ItemModal;
