import { data } from "../data";
import { useContext } from "react";
import { effectsContext } from "../contexts";

import Item from "./common/Item";
import Footer from "./Footer";
import ItemModal from "./common/ItemModal";

function Landing() {
  const { modalItem } = useContext(effectsContext);

  return (
    <main className="landing">
      {modalItem && (
        <div className="modal-container">
          <ItemModal modalItem={modalItem} />
        </div>
      )}
      <section className="trending">
        <h2>Illuminate your gullet</h2>
        <div className="item-container">
          <Item item={data.power_bitch_balls} />
          <Item item={data.green_burrito} />
          <Item item={data.all_your_breads} />
        </div>
      </section>
      <section className="intro-card">
        <div className="card">
          <img src="../images/intro.png" alt="dessert" />
          <div className="text-wrapper">
            <div className="text">
              <h3>Why hello there</h3>
              <p>
                Fancy meeting you here. I'm Erica and this is what I do. I can't
                wait to show you my delectibles
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
export default Landing;
