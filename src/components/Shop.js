import { data } from "../data";

function Shop() {
  return (
    <div className="shop">
      <section className="desserts">
        <h2>Desserts</h2>
        <div className="item-container">
          <div className="item">
            <img src={data.chonky_chip.img} alt="chonky chip" />
            <div className="text">
              <h5>{data.chonky_chip.name}</h5>
              <p>{data.chonky_chip.price}</p>
            </div>
          </div>
          <div className="item">
            <img src={data.based_brownies.img} alt="chonky chip" />
            <div className="text">
              <h5>{data.based_brownies.name}</h5>
              <p>{data.based_brownies.price}</p>
            </div>
          </div>
          <div className="item">
            <img src={data.they_cookies.img} alt="chonky chip" />
            <div className="text">
              <h5>{data.they_cookies.name}</h5>
              <p>{data.they_cookies.price}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Shop;
