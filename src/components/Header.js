import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useRef, useEffect, useContext } from "react";

import { effectsContext } from "../contexts";
import useForm from "../hooks/useForm";

function Header() {
  const inputRef = useRef();
  const navigate = useNavigate();
  const { expandSearchBar, setExpandSearchBar, scrollBreakPoint } =
    useContext(effectsContext);
  const [formValues, handleChange, clearForm] = useForm({ search: "" });
  const handleClick = () => setExpandSearchBar(!expandSearchBar);
  const handleSubmit = (e) => clearForm(e);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [expandSearchBar]);

  return (
    <header className={`${scrollBreakPoint && "scrolled-header"}`}>
      <img
        onClick={() => navigate("/")}
        className={`logo ${scrollBreakPoint && "scrolled-logo"}`}
        src="../images/icons/anuenue_logo.png"
        alt="logo"
      />
      <nav>
        <div className="nav-bar">
          {/* <div className="search-bar">
            <img
              className="search"
              onClick={handleClick}
              src="../images/icons/search.png"
              alt="search"
            />
            {expandSearchBar && (
              <form onSubmit={handleSubmit}>
                <input
                  ref={inputRef}
                  type="search"
                  name="search"
                  value={formValues.search}
                  onChange={handleChange}
                />
              </form>
            )}
          </div> */}
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/bag">
              {<img className="icon bag" src="../images/icons/bag.png" alt="bag" />}
          </Link>
          <a href="https://www.instagram.com/anuenue_maui/?utm_medium=copy_link" rel="noreferrer" target="_blank">
          <img className="icon" src="../images/icons/insta.png" alt="logo" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
