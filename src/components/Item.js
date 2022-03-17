function Item({ item }) {
  return (
    <div className="item">
    <img src={item.img} alt="chonky chip" />
    <div className="text">
      <h5>{item.name}</h5>
      <p>{item.price}</p>
    </div>
  </div>
  );
}
export default Item;
