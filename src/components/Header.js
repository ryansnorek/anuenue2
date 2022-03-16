import { Link } from "react-router-dom";
import { useRef, useEffect, useContext } from "react";

import { effectsContext } from "../contexts";
import useForm from "../hooks/useForm";

function Header() {
  const inputRef = useRef();
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
          <img className="social" src="../images/icons/insta.png" alt="logo" />
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/cats">Cats</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
