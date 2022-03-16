import { data } from "../data";
import Desserts from "./Desserts";

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
        <h3>Trending</h3>
      </section>
      <section className="intro-card">
        <img src="../images/pepe_chef.jpeg" alt="dessert" />
        <div className="text-wrapper">
          <div className="text">
            <h3>Why hello there</h3>
            <p>
              Fancy meeting you here. I'm Pepe and this is 
              what I do. I can't wait to show you my abilitees
            </p>
          </div>
        </div>
      </section>
      <Desserts />
    </main>
  );
}
export default Landing;
