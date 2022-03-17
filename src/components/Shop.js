import { data } from "../data";
import Item from "./Item";

function Shop() {
  return (
    <div className="shop">
      <section className="desserts">
        <h2>Desserts</h2>
        <div className="item-container">
            <Item item={data.chonky_chip}/>
            <Item item={data.based_brownies}/>
            <Item item={data.they_cookies}/>
        </div>
      </section>
      <section className="desserts">
        <h2>Pepe Choice</h2>
        <div className="item-container">
            <Item item={data.power_bitch_balls}/>
            <Item item={data.all_your_breads}/>
            <Item item={data.champs_elycakes}/>
        </div>
      </section>
    </div>
  );
}
export default Shop;
