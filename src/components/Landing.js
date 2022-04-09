import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";

import { effectsContext } from "../contexts";
import { scrollTo } from "../helper";

import Footer from "./Footer";

function Landing() {
  const navigate = useNavigate();
  const { setPageTarget } = useContext(effectsContext);

  useEffect(() => scrollTo(0), []);

  const handleClick = (target) => {
    setPageTarget(target);
    navigate("/shop");
  };

  // Key 
  const handleKey = (e) => {
    if (e.keyCode === 80) {
      const key = document.getElementById("key");
      key.classList.remove("hide");
    }
  };
  const handleClickKey = () => {
    const pass = document.getElementById("pass");
    pass.classList.remove("hide");
    pass.focus();
  };
  const [pass, setPass] = useState("");
  const handleChangePass = (e) => {
    setPass(e.target.value);
  }
  const [adminMode, setAdminMode] = useState(false);
  const handleClickOk = () => {
    setAdminMode(true);
  }
  useEffect(() => {
    const ok = document.getElementById("ok");
    if (pass.length > 3) {
      ok.classList.remove("hide");
    } 
  }, [pass])

  useEffect(() => {
    scrollTo(10)
    const doc = document.querySelector(".wrapper");
    const header = document.querySelector("header");
    if (adminMode) {
      doc.style.overflow = "hidden";
      header.style.backgroundColor = "var(--goblin)";
    } else {
      doc.style.overflow = "scroll";
      header.style.backgroundColor = "var(--light)"
    }
   
  }, [adminMode])
  document.addEventListener("keydown", handleKey);

  // Key
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
                <input id="pass" className="hide" name="pass" type="password" value={pass} onChange={handleChangePass}/>
                <button id="ok" className="hide" onClick={handleClickOk}>ok</button>
              </div>
            </div>
          </div>
        </div>
        {adminMode && (
          <>
          <div className="admin-mode">
            <h1>GOBLIN MODE</h1>
            <button onClick={() => setAdminMode(false)}>cancel</button>
          </div>
          </>
        )}
      </section>
      <Footer />
    </main>
  );
}
export default Landing;
