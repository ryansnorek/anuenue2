import { useContext } from "react";
import { effectsContext } from "../../contexts";
import useScrollSet from "../../hooks/useScrollSet";

function ItemModal({ modalItem }) {
  const { setModalItem } = useContext(effectsContext);

  const scrollPosition = useScrollSet();

  return (
    <div className="modal" style={{ marginTop: `${scrollPosition + 30}px` }}>
      <img
        className="icon"
        onClick={() => setModalItem("")}
        src="../../images/icons/close.png"
        alt="bag"
      />
      <section className="modal-item-container">
        <img src={modalItem.img} alt={modalItem.name} />
        <div className="text-wrapper">
          <div className="text">
            <h3>{modalItem.name}</h3>
            <p>{modalItem.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ItemModal;
