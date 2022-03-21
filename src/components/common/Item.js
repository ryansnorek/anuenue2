import { useContext } from "react";
import { shoppingContext } from "../../contexts";

function Item({ item }) {
  const { setModalItem } = useContext(shoppingContext);
  const handleClickItem = () => setModalItem(item);

  return ( 
    <div className="item" onClick={handleClickItem}>
      <img className="skeleton" src={item.img} alt="item" />
      <div className="text">
        <h5>{item.name}</h5>
      </div>
    </div>
  );
}
export default Item;
