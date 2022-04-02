import { data } from "../data";
import { useContext, useEffect } from "react";
import { shoppingContext, effectsContext } from "../contexts";

import Item from "./common/Item";
import Footer from "./Footer";
import ItemModal from "./common/ItemModal";

function Shop() {
  const { modalItem } = useContext(shoppingContext);
  const { scrollPosition, pageTarget } = useContext(effectsContext);

  useEffect(
    function colorFadeInOnModalExit() {
      const shopItems = document.querySelector(".shop");
      if (!modalItem) {
        shopItems.classList.add("color-in");
      }
      return () => shopItems.classList.remove("color-in");
    },
    [modalItem]
  );

  useEffect(
    function scrollToTarget() {
      let location = 0;
      const pageSection = document.getElementById(pageTarget);
      if (pageSection) location = pageSection.offsetTop;
      const wrapper = document.querySelector(".wrapper");
      wrapper.scrollTo(0, location);
    },
    [scrollPosition, pageTarget]
  );

  return (
    <>
      <div className="shop">
        {modalItem && <ItemModal item={modalItem} />}
        <section id="1" className={`shop-items ${modalItem && "blur"}`}>
          <h2>D E S S E R T S</h2>
          <div className="item-container">
            <Item item={data.chonky_chip} />
            <Item item={data.based_brownies} />
            <Item item={data.they_cookies} />
          </div>
        </section>
        <section id="2" className={`shop-items ${modalItem && "blur"}`}>
          <h2>S P E S H A L</h2>
          <div className="item-container">
            <Item item={data.power_bitch_balls} />
            <Item item={data.all_your_breads} />
            <Item item={data.champs_elycakes} />
          </div>
        </section>
        <section id="3" className={`shop-items ${modalItem && "blur"}`}>
          <h2>M E R C H</h2>
          <div className="item-container">
            <Item item={data.cat_hat} />
            <Item item={data.cloth} />
            <Item item={data.cat_sweat} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
export default Shop;
