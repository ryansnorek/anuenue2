import { data } from "../data";
import { useContext } from "react";
import { effectsContext } from "../contexts";

import Item from "./common/Item";
import Footer from "./Footer";
import ItemModal from "./common/ItemModal";

function Shop() {
  const { modalItem } = useContext(effectsContext);

  return (
    <>
      <div className="shop">
        {modalItem && <ItemModal item={modalItem} />}
        <section className={`shop-items ${modalItem && "blur"}`}>
          <h2>Desserts</h2>
          <div className="item-container">
            <Item item={data.chonky_chip} />
            <Item item={data.based_brownies} />
            <Item item={data.they_cookies} />
          </div>
        </section>
        <section className={`shop-items ${modalItem && "blur"}`}>
          <h2>Pepe Choice</h2>
          <div className="item-container">
            <Item item={data.power_bitch_balls} />
            <Item item={data.all_your_breads} />
            <Item item={data.champs_elycakes} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
export default Shop;
