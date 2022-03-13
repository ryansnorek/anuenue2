import { data } from "../index";

function Item({ contentName }) {
  const { name, img } = data[contentName];

  return (
    <section className={`item ${contentName}`}>
      <div className="left">
        <h1>{name}</h1>
        <p>item description desceoprpeor jflaksnf aklndan </p>
      </div>
      <div className="right">
        <img className="main-image" src={img} alt="item" />
        <div className="alternate-images">
          <img src={img} alt="item" />
          <img src={img} alt="item" />
          <img src={img} alt="item" />
        </div>
      </div>
    </section>
  );
}

export default Item;
