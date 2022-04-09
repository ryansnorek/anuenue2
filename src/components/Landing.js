import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";

import { effectsContext } from "../contexts";
import { scrollTo } from "../helper";
import useAdmin from "../hooks/useAdmin";
import AdminMode from "./AdminMode";

import Footer from "./Footer";

function Landing() {
  const navigate = useNavigate();
  const { setPageTarget } = useContext(effectsContext);

  const [
    adminMode,
    pass,
    handleClickKey,
    handleChangePass,
    handleClickOk,
    handleCancelAdmin,
  ] = useAdmin();

  useEffect(() => scrollTo(0), []);

  const handleClick = (target) => {
    setPageTarget(target);
    navigate("/shop");
  };

  return (
    <main className="landing">
      <section className="trending">
        <h2>ILLUMINATE YOUR GULLET</h2>
        <div className="item-container">
          <div className="category left" onClick={() => handleClick("1")}>
            <h3>D E S S E R T S</h3>
          </div>
          <div className="category center" onClick={() => handleClick("2")}>
            <h3>S P E S H A L</h3>
          </div>
          <div className="category right" onClick={() => handleClick("3")}>
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
              <div className="sas">
                <img
                  id="key"
                  className="hide"
                  src="../images/sas.jpeg"
                  alt="sas"
                  onClick={handleClickKey}
                />
                <input
                  id="pass"
                  className="hide"
                  name="pass"
                  type="password"
                  value={pass}
                  onChange={handleChangePass}
                />
                <button id="ok" className="hide" onClick={handleClickOk}>
                  ok
                </button>
              </div>
            </div>
          </div>
        </div>
        {adminMode && <AdminMode handleCancelAdmin={handleCancelAdmin} />}
      </section>
      <Footer />
    </main>
  );
}
export default Landing;
