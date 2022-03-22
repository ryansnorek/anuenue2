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
        <h2>ILLUMINATE YOUR GULLET</h2>
        <div className="item-container">
          <div className="category left">
            <h3>D E S S E R T S</h3>
          </div>
          <div className="category center">
            <h3>S P E S H A L</h3>
          </div>
          <div className="category right">
            <h3>M E R C H</h3>
          </div>
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
