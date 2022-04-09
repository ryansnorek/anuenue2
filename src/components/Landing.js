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
  const [editMode, setEditMode] = useState(false);
  const handleClickOk = () => {
    setEditMode(true);
  }
  useEffect(() => {
    if (pass.length > 3) {
      const ok = document.getElementById("ok");
      ok.classList.remove("hide");
    }
  }, [pass])
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
        {editMode && (
          <>
          <div className="edit-mode">
            <h1>EDIT MODE</h1>
          </div>
          </>
        )}
      </section>
      <Footer />
    </main>
  );
}
export default Landing;
