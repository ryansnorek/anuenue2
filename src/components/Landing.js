import { data } from "../data";
import Desserts from "./Desserts";
import Footer from "./Footer";

function Landing() {
  return (
    <main className="landing">
      <section className="trending">
        <h2>Illuminate your gullet</h2>
        <div className="items">
          <div className="item">
            <img src={data.five.img} alt="balls" />
            <h4>Power Bitch Balls</h4>
          </div>
          <div className="item">
            <img src={data.six.img} alt="burrito" />
            <h4>Green Brrrrito</h4>
          </div>
          <div className="item">
            <img src={data.two.img} alt="bread" />
            <h4>All Your Bread Are Belong To Us</h4>
          </div>
        </div>
      </section>
      <section className="intro-card">  
        <img src="../images/intro.png" alt="dessert" />
        <div className="text-wrapper">
          <div className="text">
            <h3>Why hello there</h3>
            <p>
              Fancy meeting you here. I'm Erica and this is 
              what I do. I can't wait to show you my delectibles
            </p>
          </div>
        </div>
      </section>
        <Footer />
    </main>
  );
}
export default Landing;
