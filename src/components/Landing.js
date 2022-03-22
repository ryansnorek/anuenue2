import { data } from "../data";
import { useEffect } from "react";

import Item from "./common/Item";
import Footer from "./Footer";

function Landing() {

  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.scrollTo(0, 0);
  }, []);


  return (
    <main className="landing">
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
          <div className="contents">
            <img src="../images/intro.png" alt="headshot" />
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
