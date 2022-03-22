import { data } from "../data";
import { useContext, useEffect } from "react";
import { shoppingContext } from "../contexts";

import Item from "./common/Item";
import Footer from "./Footer";
import ItemModal from "./common/ItemModal";

function Shop() {
  const { modalItem } = useContext(shoppingContext);

  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="shop">
        {modalItem && <ItemModal item={modalItem} />}
        <section className={`shop-items ${modalItem && "blur"}`}>
          <h2>D E S S E R T S</h2>
          <div className="item-container">
            <Item item={data.chonky_chip} />
            <Item item={data.based_brownies} />
            <Item item={data.they_cookies} />
          </div>
        </section>
        <section className={`shop-items ${modalItem && "blur"}`}>
          <h2>S P E S H A L</h2>
          <div className="item-container">
            <Item item={data.power_bitch_balls} />
            <Item item={data.all_your_breads} />
            <Item item={data.champs_elycakes} />
          </div>
        </section>
        <section className={`shop-items ${modalItem && "blur"}`}>
          <h2>M E R C H</h2>
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
