import { data } from "../data";
import { useContext, useLayoutEffect } from "react";
import { shoppingContext, effectsContext } from "../contexts";

import Item from "./common/Item";
import Footer from "./Footer";
import ItemModal from "./common/ItemModal";

function Shop() {
  const { modalItem } = useContext(shoppingContext);
  const { scrollPosition, setScrollPosition, pageTarget } = useContext(effectsContext);

  useLayoutEffect(() => {
    const pageSection = document.getElementById(pageTarget);
    pageSection && setScrollPosition(pageSection.offsetTop);
  }, [pageTarget, setScrollPosition]);

  useLayoutEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.scrollTo(0, scrollPosition);
  },[scrollPosition])

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
