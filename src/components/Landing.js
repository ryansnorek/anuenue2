import { data } from "../data";
import { useContext } from "react";

import { effectsContext } from "../contexts";

function Landing() {
  const { scrollBreakPoint, setScrollBreakPoint } = useContext(effectsContext);
  const handleScroll = () => {
    const element = document.querySelector(".landing-wrapper")
    if (element.scrollTop > 69) {
        setScrollBreakPoint(true);
    } else {
        setScrollBreakPoint(false);
    }
  };

  return (
    <div className={`landing-wrapper ${scrollBreakPoint && "scrolled-landing"}`} onScroll={handleScroll}>
      <main className="landing">
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
      </main>
    </div>
  );
}
export default Landing;
