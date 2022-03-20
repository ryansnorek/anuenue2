import { useContext, useState, useEffect } from "react";
import { effectsContext } from "../../contexts";

function ItemModal({ item }) {
  const { setModalItem } = useContext(effectsContext);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const page = document.querySelector(".wrapper");
    page.scrollTop < 70 && page.scrollTo(0, 70);
    setScrollPosition(page.scrollTop);
  }, []);

  return (
    <div className="modal-container">
      <div className="modal" style={{ marginTop: `${scrollPosition + 60}px` }}>
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default ItemModal;
