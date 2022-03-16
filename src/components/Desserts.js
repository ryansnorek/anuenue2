import { data } from "../data";

function Desserts() {

  return (
      <div className="desserts">
        <section className="top-item">
          <div className="text-wrapper">
            <div className="text">
              <h3>Desserts</h3>
              <p>
                dkjankdjnaslkdj akjdbn and alkajs laskjdalsk jnakjdn akjdbn
                kdjlansdkasndlkasjndlakjndlksjandlakjndlksajndlkjasndkjasd dklsa
                ksd lkjadlk jalskjd lakjdl akjlkjd lkas lkajs kljasdl
              </p>
            </div>
          </div>
          <img src={data.one.img} alt="dessert" />
        </section>
        <section className="items">
            
        </section>
      </div>
  );
}
export default Desserts;
