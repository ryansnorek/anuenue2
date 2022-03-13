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
        <img src={img} alt="item"/>
      </div>
    </section>
  );
}

export default Item;
