import { useContext } from "react";
import { effectsContext } from "../../contexts";

function Item({ item }) {
  const { setModalItem } = useContext(effectsContext);
  const handleClickItem = () => setModalItem(item);

  return ( 
    <div className="item" onClick={handleClickItem}>
      <img className="skeleton" src={item.img} alt="chonky chip" />
      <div className="text">
        <h5>{item.name}</h5>
      </div>
    </div>
  );
}
export default Item;
