import { useContext } from "react";
import { effectsContext } from "../../contexts";

function Item({ item }) {
  const { setModalItem } = useContext(effectsContext)
  return (
    <div className="item" onClick={() => setModalItem(item)}>
      <img className="skeleton" src={item.img} alt="chonky chip" />
      <div className="text">
        <h5>{item.name}</h5>
        <p>${item.price}</p>
      </div>
    </div>
  );
}
export default Item;
