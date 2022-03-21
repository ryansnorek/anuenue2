function BagItem({ item }) {
  return (
    <div className="bag-item">
      <div className="item">
        <img className="skeleton" src={item.img} alt="bag item" />
        <div className="text">
          <h5>{item.name}</h5>
          <p>qty: {item.qty}</p>
          <p>price: {item.price}</p>
          <p>total: {item.price * item.qty}</p>
        </div>
      </div>
    </div>
  );
}
export default BagItem;
