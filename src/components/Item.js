function Item({ contentName }) {
  return (
    <section className={`item ${contentName}`}>
      <div className="left">
        <h1>Item Title {contentName}</h1>
        <p>item description desceoprpeor jflaksnf aklndan </p>
      </div>
    </section>
  );
}

export default Item;
