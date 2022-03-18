import { useContext } from "react";
import { effectsContext } from "../../contexts";

function ItemModal() {
  const { setModalItem } = useContext(effectsContext);

  return (
    <div className="modal">
      <img className="icon" onClick={() => setModalItem("")} src="../../images/icons/close.png" alt="bag" />
      <section className="modal-item-container">
        <h3>Item Name</h3>
        <p>description</p>
      </section>
    </div>
  );
}
export default ItemModal;
